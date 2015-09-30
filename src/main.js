/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var Camera = require('react-native-camera');
var EddystoneBeaconScanner = require('eddystone-beacon-scanner');

var bleqr = React.createClass({
  getInitialState: function() {
    return {
      cameraType: Camera.constants.Type.back,
      uid: '',
      beacon: {
        namespace: '',
        distance: 0,
        tlm: {}
      }
    };
  },
  componentWillMount: function(){
    EddystoneBeaconScanner.startScanning(true);
    EddystoneBeaconScanner.on('updated', this._onPeripheralFound);
  },

  componentWillUnMount: function(){
    EddystoneBeaconScanner.stopScannning();
  },

  render: function() {

    var Temperature = (<View>
                        <Text style={styles.welcome}>
                          Temperature: {this.state.beacon.tlm.temp ? this.state.beacon.tlm.temp : ''}
                        </Text>
                      </View>); 

    var Battery = (<View>
                    <Text style={styles.welcome}>
                      Battery: {this.state.beacon.tlm.vbatt ? this.state.beacon.tlm.vbatt : '' }
                    </Text>
                  </View>); 

    var Distance = (<View>
                    <Text style={styles.welcome}>
                      Distance: {this.state.beacon.distance ? this.state.beacon.distance.toFixed(4) : ''}
                    </Text>
                   </View>); 

    var Found = (<View>
                  {Distance}
                  {Battery}
                  {Temperature}
                </View>);

    var NotFound = (<Text style={styles.welcome}>Please scan a ble code</Text>);

    return (
      <Camera
        ref="cam"
        style={styles.container}
        onBarCodeRead={this._onBarCodeRead}
        type={this.state.cameraType}>
        {this.state.uid && this.state.uid === this.state.beacon.namespace ? Found : NotFound}
      </Camera>
    );
  },

  _onBarCodeRead: function(e) {
    this.setState({uid: e.data});
  },

  _onPeripheralFound: function(beacon) {
    if(this.state.uid === beacon.namespace && beacon.tlm){
      this.setState({ beacon });
    }
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('bleqr', () => bleqr);
