#!/usr/bin/env bash
set -e

# Run tests
karma start --single-run

# Deploy on Heroku
git push heroku master