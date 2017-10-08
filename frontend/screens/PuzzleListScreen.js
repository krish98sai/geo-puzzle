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
  Alert,
  AsyncStorage,
  ScrollView,
  ListView
} from 'react-native';
import CreatePuzzleScreen from './CreatePuzzleScreen';
import CreatePostScreen from './CreatePostScreen';
import ViewPuzzleScreen from './ViewPuzzleScreen';
import { StackNavigator } from 'react-navigation';
import { Camera, Permissions, Location } from 'expo';
class PuzzleListScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby Puzzle List',
    header: null
  };
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      puzzdataSource: ds,
      location: {
        coords: {
          latitude:0,
          longitude:0,
        }
      },
    };
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
      distanceInterval: 5
    }, location => {
      location.coords.latitudeDelta = 0.02;
      location.coords.longitudeDelta = 0.02;
      this.setState({location});
      this.fetchPuzzles();
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
          puzzdataSource: this.state.puzzdataSource.cloneWithRows(response)
        });
      });
    }


  renderRow(puzzle, sectionId, rowId, highlightRow){
    const { navigate } = this.props.navigation;
    return(
      <TouchableOpacity style={styles.container} onPress={async()=>{
        try{
            await AsyncStorage.setItem('id', puzzle.id + '');
            console.log("Any string");
        }catch(error){
            console.log(error);
        }
        navigate("ViewPuzzleScreen");
      }}>
          <View style={{flexDirection: "row"}}>
            <Text>{puzzle.title}</Text>
            <Text>{puzzle.distance} miles</Text>
          </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={() => { this._getLocationAsync();  }}>
          <Text>Refresh Location</Text>
        </TouchableOpacity>
        <ScrollView>
          <ListView
            dataSource={this.state.puzzdataSource}
            renderRow={this.renderRow.bind(this)}/>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigate('CreatePuzz')}>
          <Text>make puzzle</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default myapp = StackNavigator({
  PuzzleList: {screen: PuzzleListScreen },
  CreatePuzz: {screen: CreatePuzzleScreen},
  CreatePost: {screen: CreatePostScreen},
  ViewPuzzleScreen: {screen: ViewPuzzleScreen},

});

const styles = StyleSheet.create({

  /*buttoner: {
    color:"black",
    width: 50,
    backgroundColor:"white",
  },
  background: {
    flex:1,
    backgroundColor:'#66b8D3',
  },*/

  container: {
    flex: 1,
    backgroundColor:'#3498db',

  },
  logoBox:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,

  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
  },
  loginstuff: {
    flex: 2,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 20,
    color: '#000',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 10,
  }


});
