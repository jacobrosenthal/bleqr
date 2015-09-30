# bleqr
An react native (ios only) application that allows you to scan a qr code containing an eddystone uid and see its telemetry data overlaid on the screen. Currently just a demo of a concept Im working on heavily inspired by [OpenHybrid](http://openhybrid.org/).

![qr code with overlaid telemetry data](https://github.com/jacobrosenthal/bleqr/raw/master/screenshots/IMG_2327.PNG)

## Install and start the (webpack) packager
```
npm i && npm run start
```
Then `open ios/bleqr.xcodeproj` Adjust the ip address in AppDelegate.m to your local machine
Finally run on your device (if/when another packager window opens, control c it to stop it)

## Simulate an eddystone
To simulate an eddystone beacon you can use [eddystone-beacon](https://github.com/don/node-eddystone-beacon) which is included here, `npm run test` (create the example beacon with the uid of the qr code above)

## Create a qr code
Google offers a service to create qr codes. Heres one for the uid of the simulated eddystone included https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=00010203040506070809&chld=H|0
![qr code](https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=00010203040506070809&chld=H|0)

## Known issues
No Android. Theres no [noble](https://github.com/sandeepmistry/noble) shim yet, and I'm still working on my [ios noble shim](https://github.com/jacobrosenthal/react-native-ble)
