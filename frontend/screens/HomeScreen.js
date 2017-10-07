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
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Loggin',
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
        <KeyboardAvoidingView behavior="padding"  style={styles.loginstuff}>
          <TextInput style={styles.input}
            placeholder= "username"
            placeholderTextColor= "rgba(0,0,0,0.7)"
            returnKeyType ="next"
            underlineColorAndroid='transparent'
            keyboardType= "email-address"
            onSubmitEditing={() => this.passwordInput.focus()}
          />

          <TextInput style={styles.input}
            placeholder= "password"
            secureTextEntry
            placeholderTextColor= "rgba(0,0,0,0.7)"
            returnKeyType ="go"
            underlineColorAndroid='transparent'
            ref={(input) => this.passwordInput = input}

          />
          <TouchableOpacity style={styles.button} onPress={() => navigate('CreateAcct')}>
            <Text>
            LOGIN
            </Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>

      </View>

    );
  }
}

class CreateAccount extends React.Component {

  static navigationOptions = {
    title: 'CreateAccount',
    header: null
  };
  render() {

    const { navigate } = this.props.navigation;
    return (


      <View>
        <Text>CreateAccount</Text>
        <Button
          onPress={() => navigate('Home')}
          title="Loggin"
        />
      </View>







    );
  }
}

export default myapp = StackNavigator({
  Home: { screen: HomeScreen },
  CreateAcct: { screen: CreateAccount },
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
