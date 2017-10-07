import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export class Transaction extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      
    }
  }


  render() {
    return (
      <View style={{flex:1,alignItems:'center'}}>  
        <Text>
          No new Transactions
        </Text>
        <View style={{backgroundColor:'#fc004f',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd'}}>
            <Text style={{position:'absolute',fontSize:16,top:8,paddingLeft:16,color:'white',fontWeight:'bold'}}>Big Bazaar</Text>
        </View>
         <View style={{flex:1,backgroundColor:'#401f80',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd',marginTop:10}}>
            <Text></Text>
        </View>
         <View style={{flex:1,backgroundColor:'#fc004f',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd',marginTop:10}}>
            <Text></Text>
        </View>
      </View>
    );
  }
}
