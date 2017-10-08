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

import { StackNavigator } from 'react-navigation';
import { Camera, Permissions } from 'expo';
import ViewPostScreen from './ViewPostScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };
  state = {
    password: "",
    username: ""
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
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
          <TouchableOpacity style={styles.button} onPress={() => navigate('ViewPost')}>
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
    Home: { screen: HomeScreen },
    ViewPost: { screen: ViewPostScreen},
  });


/*export default myapp = StackNavigator({
  Home: { screen: HomeScreen },
  ViewPost: { screen: ViewPostScreen},
});*/

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
