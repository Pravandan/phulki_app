import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
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
        <View style={{flex:1,paddingTop:10,alignItems:'center',paddingBottom:200}}>
          <Image
                style={{width:120, height:120,opacity:1.0,margin:18}}
                source = {require('../../../assets/icons/boy.png')}
          />
          <Text style={{fontSize:18,fontWeight:'bold'}}>PRAVANDAN CHAND</Text>
          <Text style={{fontSize:16}}>8750507753</Text>
        </View>
      </View>
    );
  }
}
