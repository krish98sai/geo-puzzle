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
class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
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
            placeholder= "email"
            placeholderTextColor= "rgba(0,0,0,0.7)"
            returnKeyType ="next"
            underlineColorAndroid='transparent'
            keyboardType= "email-address"
            onSubmitEditing={() => this.passwordInput.focus()}
            //ref={(input) => {this.state.username = input}}
            onChangeText = {(email) => {
              this.setState({email});
            }}
          />

          <TextInput style={styles.input}
            placeholder= "password"
            secureTextEntry
            placeholderTextColor= "rgba(0,0,0,0.7)"
            returnKeyType ="go"
            underlineColorAndroid='transparent'
            //ref={(input) => {this.state.password = input}}
            onChangeText = {(password) => {
              this.setState({password});
            }}
          />
          <TouchableOpacity style={styles.button} onPress={() => {
            var loginjson = JSON.stringify({
              user: {
                email: this.state.email,
                password: this.state.password
              }
            })
            fetch('http://geo-puzzle.herokuapp.com/users/sign_in', {
              method: 'POST',
              headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
              },
              body : loginjson
            }).then(async(response) => {
              var arr = Object.keys(response);
              var str = '';
              for (var i = 0; i < arr.length; i++) {
                str += arr[i] + " "
              }
              try{
                await AsyncStorage.setItem('auth_token', JSON.parse(response._bodyText).token);
              }catch(error){

              }
            })
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

class CreateAccount extends React.Component {

  static navigationOptions = {
    title: 'CreateAccount',
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
