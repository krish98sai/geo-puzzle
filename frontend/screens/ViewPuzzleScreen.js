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
import CreatePostScreen from './CreatePostScreen'
import { StackNavigator } from 'react-navigation';
import { Camera, Permissions, Location } from 'expo';

export default class ViewPuzzleScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      puzzle: {
        title: '',
        description: '',
        contained_posts: '',
        latitude: 0.0,
        longitude: 0.0
      },
      clue1: {
        title: '',
        description: '',
        contained_posts: '',
        latitude: 0.0,
        longitude: 0.0
      },clue2: {
        title: '',
        description: '',
        contained_posts: '',
        latitude: 0.0,
        longitude: 0.0
      },clue3: {
        title: '',
        description: '',
        contained_posts: '',
        latitude: 0.0,
        longitude: 0.0
      }
    }
  }
  static navigationOptions = {
    title: 'CreateAccount',
    header: null
  };

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('id');
      console.log(value);
      this.setState(prevState => {
        return { id: value };
      });
    } catch(error) {

    }
  }
  fetchPuzzle(){
  var url = 'http://geo-puzzle.herokuapp.com/puzzle/show?id=' + this.state.id;
  fetch(url)
  .then((response) => {
    response.json()
  })
  .then((response) => {
    this.setState({puzzle: response})
  })
}

fetchClue1(){
  var url = 'http://geo-puzzle.herokuapp.com/post/show?id=' + parseInteger(this.state.puzzle.contained_posts.split(" ")[0]);
  fetch(url)
  .then((response) => {
    response.json()
  })
  .then((response) => {
    this.setState({clue1: response})
  })
}

fetchClue2(){
  var url = 'http://geo-puzzle.herokuapp.com/post/show?id=' + parseInteger(this.state.puzzle.contained_posts.split(" ")[1]);
  fetch(url)
  .then((response) => {
    response.json()
  })
  .then((response) => {
    this.setState({clue2: response})
  })
}

fetchClue3(){
  var url = 'http://geo-puzzle.herokuapp.com/post/show?id=' + parseInteger(this.state.puzzle.contained_posts.split(" ")[2]);
  fetch(url)
  .then((response) => {
    response.json()
  })
  .then((response) => {
    this.setState({clue3: response})
  })
}

  render() {
    let id = this.state.id;
    console.log(id);
    return(
      <View style={styles.container}>
        <Text>{id}</Text>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
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
