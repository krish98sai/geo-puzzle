import React from 'react';
import { Platform, StatusBar, StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { AppLoading, Asset, Font, Constants, Components, Video } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';



  /*state = {
    isLoadingComplete: false,
  };

  render() {
    return (
    /*if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync([
        // This is the font that we are using for our tab bar
        Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }
  onPressButton(){
    this.vid.presentFullscreenPlayer();
    this.vid.seek(5);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressButton}>
        <Text style={{color: 'yellow'}}>Full Screen</Text>
        </TouchableHighlight>
        <Video
          ref={r=>this.vid = r}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#rgba(0,0,0,0.9)',
  },
});
