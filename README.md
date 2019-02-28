## (**Dirty**) Tutorial

1. Set up Raspberry PI
2. Configure `python` and `opencv`
3. Schedule `crontab` runner.

### Crontab script for Raspberry PI

1. `crontab -e` opens `crontab` for editing
2. `* * * * * /home/pi/webcam.sh 2>&1` schedule taking pictures every minute
