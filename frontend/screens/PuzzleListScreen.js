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
  AsyncStorage
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Camera, Permissions } from 'expo';
class PuzzleListScreen extends React.Component {
  static navigationOptions = {
    title: 'Nearby Puzzle List',
    header: null
  };
  state = {
    password: "",
    username: ""
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
    /*  <View style={[styles.background]}>
        <Text style = {{
          color:'black'

        }}>Hello, Chat App!</Text>
        <Button
          color="#66C8f3"
          backgroundColor="#6688ff"

          onPress={() => navigate('CreateAcct')}
          title="CreateAccount"
        />
      </View>*/



      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image
          style={styles.logo}
          source={require('../resource/images/Logo.png')}
          />
        </View>
        <KeyboardAvoidingView behavior="padding"  style={styles.loginstuff}>
          <TextInput style={styles.input}
            placeholder= "username"
            placeholderTextColor= "rgba(0,0,0,0.7)"
            returnKeyType ="next"
            underlineColorAndroid='transparent'
            keyboardType= "email-address"
            onSubmitEditing={() => this.passwordInput.focus()}
            ref={(input) => {this.state.username = input}}
          />

          <TextInput style={styles.input}
            placeholder= "password"
            secureTextEntry
            placeholderTextColor= "rgba(0,0,0,0.7)"
            returnKeyType ="go"
            underlineColorAndroid='transparent'
            ref={(input) => {this.state.password = input}}

          />
          <TouchableOpacity style={styles.button} onPress= {async() => {
            var json_str = JSON.stringify({
              user: {
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.confirm_password
              }
            })
            try{
              const value = await AsyncStorage.getItem('auth_token');
              if(value != null){
                Alert.alert(value);
              }
            }catch(error){

            }
            //Alert.alert(json_str);

            /*fetch('https://geo-puzzle.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: json_str
                  })*/
          }}>
            <Text>
            LOGIN
            </Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </View>

    );
  }
}

export default myapp = StackNavigator({
  PuzzleList: {screen: PuzzleListScreen },
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
