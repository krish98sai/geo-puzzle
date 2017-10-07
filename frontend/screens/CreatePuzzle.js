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
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class CreatePuzzleScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonsNum: 1
    }
  }

  static navigationOptions = {
    title: 'CreatePuzzle',
    header:null
  }

  getInitialState() {
    return { buttons: [] }
  }

  _addRow() {
    this.state.buttons.push(index++);
    this.setState({ buttons: this.state.buttons })
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding"  style={styles.loginstuff}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text sytle={styles.title}>Title: </Text>
            <Text sytle={styles.title}> </Text>
            <Text sytle={styles.title}> </Text>
            <Text sytle={styles.title}>Description: </Text>
            <Text sytle={styles.title}> </Text>
            <Text sytle={styles.title}> </Text>
            <Text sytle={styles.title}>Number of points: </Text>

          </View>
          <View style={{flex:2}}>
            <View>
              <TextInput style={styles.input}
                returnKeyType ="next"
                underlineColorAndroid='transparent'
                />
            </View>
            <View>

              <TextInput style={styles.input}
                returnKeyType ="next"
                keyboardType = "numeric"
                underlineColorAndroid='transparent'
                />
            </View>
            <View>
              <TextInput style={styles.inputDiscription}
                returnKeyType = "next"
                underlineColorAndroid='transparent'
                multiline = {true}
                />
            </View>
          </View>

        </View>

          <ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigate('CreateAcct')}>
              <Text>
              Clue 1
              </Text>
            </TouchableOpacity>
            <View style={styles.spacer}><Text sytle={styles.title}> </Text></View>
            <TouchableOpacity style={styles.button} onPress={() => navigate('CreateAcct')}>
              <Text>
              Clue 2
              </Text>
            </TouchableOpacity>
            <View style={styles.spacer}><Text sytle={styles.title}> </Text></View>
            <TouchableOpacity style={styles.button} onPress={() => navigate('CreateAcct')}>
              <Text>
              Clue 3
              </Text>
            </TouchableOpacity>
          </ScrollView>

          <TouchableOpacity style={styles.button} onPress={() => navigate('CreateAcct')}>
            <Text>
            Create Puzzle
            </Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
      </View>
      );
  }
}




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
  spacer:{
    flex:1,
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
    marginTop: 60,
    fontSize: 100,
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
    //flex: 3
  },
  inputDiscription: {
    height: 80,
    backgroundColor: '#FFF',
    marginBottom: 20,
    color: '#000',
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'left'

    //flex: 3
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    
  }


});
