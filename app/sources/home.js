import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

const window = Dimensions.get('window');

import {Bill} from './modules/bills';
import {Transaction} from './modules/transactions';
import {Profile} from './modules/profile';
import {Pay} from './modules/pay';

export class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };


  render() {
    return (
      <View style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,alignItems:'center',flexDirection:'row',top:24}}>
          <Text style={{fontSize:20}}>PHULKI</Text>
        </View>

        <Pay />
        
        <View style={{flex:1,alignItems:'center',flexDirection:'row',top:window.height-60}}>
          
          <Image
                style={{width:40, height:40, margin:18,opacity:1.0}}
                source = {require('../../assets/icons/trans.png')}
          />
            <Image
                style={{width:40, height:40, margin:18}}
                source = {require('../../assets/icons/invoice.png')}
          />
           <Image
                style={{width:40, height:40, margin:18}}
                source = {require('../../assets/icons/trans.png')}
          />
           <Image
                style={{width:40, height:40, margin:18}}
                source = {require('../../assets/icons/invoice.png')}
          />
        </View>
      </View>
    );
  }
}
