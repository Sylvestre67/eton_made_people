module.exports = function(grunt) {
	require('jit-grunt')(grunt);

	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			app: {
				src: [ 'app/eton.module.js', // Always grab module files first
						'app/*.js',
						'app/**/*.js',
						'!app/*.specs.js',
						'!app/**/*.specs.js' ], // Do not Concat the specs, no need for this.
				dest: 'dist/build/js/eton.js'
			},
			vendor: {
				src: [
					'node_modules/angular/*.min.js',
					'node_modules/angular-resource/*.min.js',
					'node_modules/angular-material/*.min.js',
					'node_modules/angular-animate/*.min.js',
					'node_modules/angular-aria/*.min.js',
					'node_modules/angular-sanitize/*.min.js',
					'node_modules/angular-messages/*.min.js',
					'node_modules/angular-ui-router/release/angular-ui-router.js',
				],
				dest: 'dist/build/js/vendors.js'
			}
		},
		less_imports: {
			eton_imports: {
				src: [
					'app/*.less',
					'app/**/*.less'
				],
				dest: 'dist/css/imports.less'
			}
		},
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					'dist/css/eton.min.css': [
						'dist/css/imports.less',
					]
				}
			}
		},
		ngAnnotate: {
			options: {
			},
			eton: {
				files: [{
					expand: true,
					src: ['dist/build/js/eton.js'],
					ext: '.annotated.js', // Dest filepaths will have this extension.
					extDot: 'last',       // Extensions in filenames begin after the last dot
				}],
			},
		},
		uglify: {
			app: {
				options: {
					sourceMap: true,
				},
				files: {'dist/js/eton.min.js': ['dist/build/js/eton.annotated.js']}
			},
			vendor: {
				options: {
					sourceMap: true,
				},
				files: {'dist/js/vendors.min.js': ['dist/build/js/vendors.js']}
			}
		},
		hash: {
			options: {
				mapping: 'dist/assets.json', //mapping file so your server can serve the right files
				srcBasePath: 'dist/', // the base Path you want to remove from the `key` string in the mapping file
				destBasePath: 'dist/', // the base Path you want to remove from the `value` string in the mapping file
				flatten: false, // Set to true if you don't want to keep folder structure in the `key` value in the mapping file
				hashLength: 8, // hash length, the max value depends on your hash function
			},
			js: {
				src: ['dist/js/eton.min.js','dist/js/vendors.min.js'],  //all your js that needs a hash appended to it
				dest: 'dist/js/' //where the new files will be created
			},
			css: {
				src: ['dist/css/eton.min.css'],  //all your css that needs a hash appended to it
				dest: 'dist/css/' //where the new files will be created
			}
		},
		replace: {
			dist: {
				options: {
					patterns: [
						{
							json:'<%= assets %>'
						}
					]
				},
				files: [
					{expand: true, flatten: true, src: ['app/index.html'], dest:''}
				]
			}
		},

		clean: {
			build: ['dist/build/**','dist/css/*.less','dist/css/*.min.css','dist/*.json',
				'dist/js/*.min.js','dist/js/*.min.js.map'],
			release: ['dist/**']
		},

		watch: {
			styles: {
				files: ['app/*.js',
					'app/**/*.js',
					'app/*.less',
					'app/**/*.less',
					'app/*.html',
					'app/**/*.html'
				], // which files to watch
				tasks: ['concat', 'ngAnnotate', 'uglify:app','less_imports', 'less', 'setopts_dev', 'replace'],
				options: {
					nospawn: true,
					livereload: true,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-less-imports');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.registerTask('setopts', function (domain) {
		assets = grunt.file.readJSON('dist/assets.json');
		grunt.config.set('assets', assets);
	});

	grunt.registerTask('setopts_dev', function (domain) {
		assets = grunt.file.readJSON('app/assets/assets_dev.json');
		grunt.config.set('assets', assets);
	});

	grunt.registerTask('default', ['concat', 'ngAnnotate', 'uglify', 'less_imports', 'less',
		'setopts_dev', 'replace', 'watch']);

	grunt.registerTask('rebuild', ['concat', 'ngAnnotate', 'uglify', 'less_imports', 'less',
		'setopts_dev', 'replace', 'watch']);

	grunt.registerTask('deploy', ['clean:release', 'concat', 'ngAnnotate', 'uglify', 'less_imports', 'less',
		'hash', 'setopts', 'replace', 'clean:build']);
};