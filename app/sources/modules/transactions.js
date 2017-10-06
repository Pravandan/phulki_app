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
      <View style={{flex:1}}>  
        <Text>
          No new Transactions
        </Text>
        <View style={{backgroundColor:'white',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd'}}>
            <Text style={{position:'absolute',fontSize:16,top:8,paddingLeft:16}}>Big Bazaar</Text>
        </View>
         <View style={{flex:1,backgroundColor:'white',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd',marginTop:10}}>
            <Text></Text>
        </View>
         <View style={{flex:1,backgroundColor:'white',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd',marginTop:10}}>
            <Text></Text>
        </View>
      </View>
    );
  }
}
