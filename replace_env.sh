#!/bin/bash

# Replace placeholders with actual environment variable values
sed -i "s/%API%/$(echo $API | sed 's/\//\\\//g')/g" /usr/share/nginx/html/index.html