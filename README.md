# bleqr
An react native (ios only) application that allows you to scan a qr code containing an eddystone uid ![qr code](https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=00010203040506070809&chld=H|0) and see its telemetry data overlaid on the screen.
![qr code with overlaid telemetry data](https://github.com/jacobrosenthal/bleqr/raw/master/screenshots/IMG_2327.PNG)
Currently just a demo of a concept Im working on heavily inspired by [OpenHybrid](http://openhybrid.org/).

## Install and open the packagerand open in xcode, run on your device
```
npm i && npm run start
```
Then open ios/bleqr.xcodeproj
Adjust the ip address in AppDelegate.m to your local machine
Finally run on your device (if/when another packager window opens, control c it to stop it)

## Simulate an eddystone
To simulate an eddystone beacon you can use [eddystone-beacon](https://github.com/don/node-eddystone-beacon) which is included here, `npm run test` (create the example beacon with the uid of the qr code above)

## Known issues
No Android. Theres no [noble](https://github.com/sandeepmistry/noble) shim yet, and I'm still working on my [ios noble shim](https://github.com/jacobrosenthal/react-native-ble)

React Native packager doesnt have the concept of a resolve alias to globally swap out requires, and webpack is also [not working](https://github.com/mjohnston/react-native-webpack-server/issues/75) so you must manually edit node_modules/eddystone-beacon-scanner/lib/eddystone-beacon-scanner.js and change the noble require
```
//var noble = require('noble');
var noble = require('react-native-ble');
```

