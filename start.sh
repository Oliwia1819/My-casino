#!/bin/sh
cd /app
npm install --prefer-offline --production --quiet --force
# export PORT=3000
exec npm run start