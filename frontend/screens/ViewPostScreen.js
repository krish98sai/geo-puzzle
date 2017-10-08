import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Screen,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
  Image,
  Alert
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Camera, Permissions, Video } from 'expo';

class ViewPostScreen extends React.Component {
  static navigationOptions = {
    title: 'ViewPosts',
  }

  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }
  onPressButton(){
  }

  render() {
    const { navigate } = this.props.navigation;

   return (
     <View style={styles.container}>
       <TouchableHighlight onPress={this.onPressButton}>
       <View>
        <Video
          ref={r=>this.vid = r}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          useNativeControls ={true}
          resizeMode="cover"
          repeat
          style={{ width: 300, height: 300 }}
         />
        </View>

       </TouchableHighlight>

     </View>
   );
 }
}

export default myapp = StackNavigator({
  ViewPost: { screen: ViewPostScreen},
});

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#rgba(0,0,0,0.9)',
 },
});
