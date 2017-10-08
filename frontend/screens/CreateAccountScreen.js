import React from 'react';

import { ExpoLinksView } from '@expo/samples';
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

import { StackNavigator } from 'react-navigation';
import { Camera, Permissions } from 'expo';

class CreateAccountScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      }
    }

    static navigationOptions = {
      title: 'CreateAccount',
      header: null
    };

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
          <KeyboardAvoidingView behavior="padding" style={styles.loginstuff}>

            <TextInput style={styles.input}
              placeholder= "name"
              placeholderTextColor= "rgba(0,0,0,0.7)"
              returnKeyType ="next"
              keyboardType= "default"
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.emailInput.focus()}
              onChangeText={(name) => {this.setState({name})}}
            />

            <TextInput style={styles.input}
              placeholder= "email address"
              placeholderTextColor= "rgba(0,0,0,0.7)"
              returnKeyType ="next"
              keyboardType= "email-address"
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.passwordInput.focus()}
              ref={(input) => this.emailInput = input}
              onChangeText={(email) => {this.setState({email})}}
            />

            <TextInput style={styles.input}
              placeholder= "password"
              secureTextEntry
              placeholderTextColor= "rgba(0,0,0,0.7)"
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.CpasswordInput.focus()}
              ref={(input) => this.passwordInput = input}
              onChangeText={(password) => {this.setState({password})}}
            />
            <TextInput style={styles.input}
              placeholder= "Confirm password"
              secureTextEntry
              underlineColorAndroid='transparent'
              placeholderTextColor= "rgba(0,0,0,0.7)"
              returnKeyType ="go"
              ref={(input) => this.CpasswordInput = input}
              onChangeText={(confirm_password) => {this.setState({confirm_password})}}
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
              CreateAccount
              </Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>

        </View>

      );
    }
  }

  /*static navigationOptions = {
    title: 'Sign Up',
    header: null
  };
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View style={{ flex: 1,
         backgroundColor:"#FFF"

      }}/>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} ratio="16:9" type={this.state.type}>

          </Camera>
        </View>
      );
    }
  }
}*/

export default myapp = StackNavigator({
  CreateAccount: { screen: CreateAccountScreen },
});

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
