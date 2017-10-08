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

    this.state = {
      puzzles: [{
        title: "test",
        description: "test",
        latitude: 0,
        longitude: 0
      }],
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

  componentWillMount() {
    this.fetchPuzzles();
    this._getLocationAsync();
  }

  componentDidMount() {
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
      timeInterval: 5000,
    }, location => {
      location.coords.latitudeDelta = 0.09;
      location.coords.longitudeDelta = 0.09;
      this.setState({location});
      //this.fetchPuzzles();
    });
  };

  fetchPuzzles(){
    var url = 'http://geo-puzzle.herokuapp.com/puzzle/index?search=' + this.state.location.coords.latitude + ',' + this.state.location.coords.longitude;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          puzzles: response,
        });
      });
    }

  render() {
    this._getLocationAsync();
    const { navigate } = this.props.navigation;
//    console.log(this.state.puzzles.keys());
    const arr = this.state.puzzles.map((marker) => (
      <MapView.Marker coordinate={marker} title={marker.title} description={marker.description}/>
    ));
    this.fetchPuzzles();
    return(
      <View style={styles.container}>
        <Text style={styles.topText}>Locations of Nearest Puzzles</Text>

        <MapView
          style={styles.map}
          region={this.state.location.coords}>
          {this.state.puzzles.map(marker => (
            <MapView.Marker coordinate={marker} title={marker.title} description={marker.description}/>
          ))}
        </MapView>

        <View style={styles.buttonView}>
          <Button title="PRESS ME" onPress={()=>{}}>PRESS ME</Button>
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
