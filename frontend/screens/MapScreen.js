import React from 'react';
import {
  View
} from 'react-native';
import {
  MapView
} from 'expo'

export default class MapScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }
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

  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.topText}>Location of Next Clue</Text>

        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}>
        </MapView>

        <View style={styles.buttonView}>
          <Button>PRESS ME</Button>
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
    flex: 2
  },
  map: {
    flex: 9
  },
  buttonView: {
    flex: 2
  }
});
