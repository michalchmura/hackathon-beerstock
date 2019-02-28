#!/bin/bash

DATE=$(date +"%Y-%m-%d_%H-%M-%S")

fswebcam -r 1920x1080 --no-banner /home/pi/webcam/$DATE.jpg