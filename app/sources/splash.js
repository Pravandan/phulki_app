import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export class Splash extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      called : false,
    }
    this.hideSplash = this.hideSplash.bind(this);
  }

  hideSplash(){
    console.log('splah hidden callback function called');
    this.props.childCallBack();
  }

  render() {
    return (
      <View>  
        <TouchableOpacity onPress = {() => this.hideSplash()}>
          <Text>
           Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

