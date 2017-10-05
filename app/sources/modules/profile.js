import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export class Profile extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  render() {
    return (
      <View style={{flex:1}}>  
        <Text>
          Profile
        </Text>
      </View>
    );
  }
}
