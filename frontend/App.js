/*import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync([
        // This is the font that we are using for our tab bar
        Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
*/

/*getting current location of user in react native
import React from 'react';
import { MapView, Constants, Location, Permissions } from 'expo';
import { Platform, Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
   mapRegion: null,
   //location: null,
   //errorMessage: null,
   lastLat: null,
   lastLong: null,
  }


 componentWillMount() {
   if (Platform.OS === 'android' && !Constants.isDevice) {
     this.setState({
       errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
     });
   } else {
     this._getLocationAsync();
   }
 }

 componentDidMount() {
   this.watchID = navigator.geolocation.watchPosition((position) => {
     // Create the object to update this.state.mapRegion through the onRegionChange function
     let region = {
       latitude:       position.coords.latitude,
       longitude:      position.coords.longitude,
     }
     this.onRegionChange(region, region.latitude, region.longitude);
   });
 }

 componentWillUnmount() {
   navigator.geolocation.clearWatch(this.watchID);
 }

 onRegionChange(region, lastLat, lastLong) {
   this.setState({
     mapRegion: region,
     // If there are no new values set the current ones
     lastLat: lastLat || this.state.lastLat,
     lastLong: lastLong || this.state.lastLong
   });
 }

 _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       errorMessage: 'Permission to access location was denied',
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ location });
 };

 render() {
     return (
       <View style={{flex: 1}}>
         <MapView
           //style={styles.map}
           region={this.state.mapRegion}
           showsUserLocation={true}
           followUserLocation={true}
           onRegionChange={this.onRegionChange.bind(this)}>
           <MapView.Marker
             coordinate={{
               latitude: (this.state.lastLat + 0.00050) || -36.82339,
               longitude: (this.state.lastLong + 0.00050) || -73.03569,
             }}>
             <View>
               <Text style={{color: '#000'}}>
                 { this.state.lastLong } / { this.state.lastLat }
               </Text>
             </View>
           </MapView.Marker>
         </MapView>
       </View>
     );
   }
}*/

import React, { Component, Alert } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationResult: null,
      locationState: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.0,
        longitudeDelta: 0.0
      }
    }
  }

/*  state = {
    locationResult: null,
    locationState: null,
  };*/

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   }

   location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location) });
   this.setState({locationState: location.coords});
 };


  render() {
    return (
      <View style = {{ flex: 1 }}>

      <MapView
        style={{ flex: 1 }}
        initialRegion = {{
          latitude: this.state.locationState.latitude,
          longitude: this.state.locationState.longitude,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}

      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
