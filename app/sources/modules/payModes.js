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
      <View style={{flex:1,top:window.height-188,alignItems:'stretch',flexDirection:'row'}}>  
        
        <TouchableOpacity style={{flex:1,padding:24,backgroundColor:'#8d17b7',alignItems:'center'}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>REQUEST</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1,padding:24,backgroundColor:'#5417b7',alignItems:'center'}}>
            <Text style={{fontSize:16,color:'white'}}>GO OFFLINE</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
