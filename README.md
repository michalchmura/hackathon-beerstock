## (**Dirty**) Tutorial

1. Set up Raspberry PI
   - preferred `Raspbian` installation
2. Configure `python` and `opencv`
3. Schedule `crontab` runner.

---

### Install `python` and `opencv`

**Note**: Raspbian comes with `python3` preinstalled

1. `pip3 install opencv-contrib-python`
2. `pip3 install numpy imutils`

---

### Crontab script for Raspberry PI

1. `crontab -e`
   - opens `crontab` scheduler for editing
2. `chmod +x home/pi/hackathon-fridge-monitoring/scripts/webcam.sh`
   - give permissions to execute the file
3. `* * * * * /home/pi/hackathon-fridge-monitoring/scripts/webcam.sh 2>&1`
   - schedule taking pictures every minute
