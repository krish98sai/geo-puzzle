import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Screen,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Image,
  Alert
} from 'react-native';
import {
  MapView,
  Permissions,
  Location
} from 'expo';

import { StackNavigator } from 'react-navigation';
class PuzzleMapScreen extends React.Component {
  constructor(props) {
    super(props);
    const ds = new MapView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      puzzdataSource: ds,
      location: {
      coords: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }
    }
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  static navigationOptions = {
    title: 'Nearby Puzzle Map',
    header: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  onRegionChange(location) {
    this.setState({location});
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    Location.watchPositionAsync({
      enableHighAccuracy: true,
      timeInterval: 1000,
    }, location => {
      location.coords.latitudeDelta = 0.02;
      location.coords.longitudeDelta = 0.02;
      this.setState({location});
    });
  };

  render() {
    this._getLocationAsync();
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Text style={styles.topText}>Locations of Nearest Puzzles</Text>

        <MapView
          style={styles.map}
          region={this.state.location.coords}>
          <MapView.Marker title="hello" description="this is the desc" coordinate={this.state.location.coords} />
        </MapView>

        <View style={styles.buttonView}>
          <Button title="PRESS ME">PRESS ME</Button>
        </View>
      </View>
    );
  }
}

export default myapp = StackNavigator({
  PuzzleMap: {screen: PuzzleMapScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    flex: 2
  },
  map: {
    flex: 9
  },
  buttonView: {
    flex: 2
  }
});
