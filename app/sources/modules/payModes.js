import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export class PayModes extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      
    }
  }


  render() {
    return (
      <View style={{flex:1,top:window.height-190,alignItems:'stretch',flexDirection:'row'}}>  
      
        <TouchableOpacity style={{flex:1,paddingBottom:38,backgroundColor:'#fc004f',alignItems:'center',paddingTop:16}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>REQUEST</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1,paddingBottom:38,backgroundColor:'#fc004f',alignItems:'center',paddingTop:16}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>GO OFFLINE</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
