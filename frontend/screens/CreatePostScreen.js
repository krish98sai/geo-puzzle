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
export default class CreatePostScreen extends React.Component {

  constructor() {
    super(props);
  }

   render() {
     return(
       //title
       //description
       //longitude
       //latitude
       //num_in_series
       //content_type: video
       //url
       <View style={styles.container}>
         <KeyboardAvoidingView behavior="padding"  style={styles.loginstuff}>
           <TextInput style={styles.input}
             placeholder= "Title"
             placeholderTextColor= "rgba(0,0,0,0.7)"
             underlineColorAndroid='transparent'
             keyboardType= "default"
             onSubmitEditing={() => this.passwordInput.focus()}
             ref={(input) => {this.state.username = input}}
           />

           <TextInput style={styles.input}
             placeholder= "Description"
             secureTextEntry
             placeholderTextColor= "rgba(0,0,0,0.7)"
             underlineColorAndroid='transparent'
             ref={(input) => {this.state.password = input}}
             numberOfLines={3}
             multiline={true}
           />
<TextInput style={styles.input}
             placeholder= "Number: "
             secureTextEntry
             placeholderTextColor= "rgba(0,0,0,0.7)"
             underlineColorAndroid='transparent'
             ref={(input) => {this.state.password = input}}
             numberOfLines={3}
             multiline={true}
           />
           <TouchableOpacity style={styles.button} onPress={() => {

           }}>
             <Text>
             Upload Post
             </Text>
           </TouchableOpacity>

         </KeyboardAvoidingView>
       </View>
     );
   }
}

const styles = StyleSheet.create({

  buttoner: {
    color:"black",
    width: 50,
    backgroundColor:"white",
  },
  background: {
    flex:1,
    backgroundColor:'#66b8D3',
  },

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
