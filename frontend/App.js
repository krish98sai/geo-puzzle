import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native';
import {
  MapView,
  Location,
  Permissions
} from 'expo'

export default class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: null,
      errorMessage: null,
      region: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.0,
        longitudeDelta: 0.0
      }
    }
  }

  componentWillMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    let location = await Location.getCurrentPositionAsync({});
    this.setState({location});
    console.log({location});

    Expo.Location.watchPositionAsync({
      timeInterval: 25
    }, (coords) => {
      console.log({coords});
      //Send data to map...
    });
  }

  render() {
    let text = 'Waiting on coordinates';
    if(this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return(
      <View style={styles.container}>
        <View style={styles.topText}>
          <Text>Location of Next Clue</Text>
        </View>

        <MapView
                style={styles.map}
                region={this.state.region}/>

        <View style={styles.buttonView}>
          <Button title="PRESS ME" onPress={() => {
            this.setState(state => { return {
                region: {
                  latitude: 27.0,
                  longitude: -122.0,
                  latitudeDelta: 0.0,
                  longitudeDelta: 0.0
                }}})
          }}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    flex: 9
  },
  buttonView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
