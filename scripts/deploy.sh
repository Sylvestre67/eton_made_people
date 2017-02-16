#!/usr/bin/env bash
set -e

# Copy, Compile and Prepare.
grunt deploy

# Run tests
karma start --single-run

# Deploy on Heroku
git push heroku master