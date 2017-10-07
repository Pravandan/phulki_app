import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';

const window = Dimensions.get('window');

import {Bill} from './modules/bills';
import {Transaction} from './modules/transactions';
import {Profile} from './modules/profile';
import {Pay} from './modules/pay';
import {PayModes} from './modules/payModes';

export class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      payMode : false,
      transacttionMode : false,
    }
    this.showPayMode = this.showPayMode.bind(this);
    this.showTransactionMode = this.showTransactionMode.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  showPayMode(){
    this.setState({
      payMode : true,
      transactionMode : false
    });
  }

  showTransactionMode(){
    this.setState({
      payMode : false,
      transactionMode : true
    });
  }


  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',flexDirection:'row',   justifyContent:'center',
top:0,borderBottomColor:'#dddddd',backgroundColor:'#fc004f',
    borderBottomWidth:2,padding:24,width:window.width}}>
          <Text style={{fontSize:20,color:'white'}}>PHULKI</Text>
        </View>

        {this.state.transactionMode &&
          
          <Profile />
          
        }

        {this.state.payMode &&
          <View>
          <Pay />
          <PayModes />
          </View>
        }


     
        <View style={{flex:1,alignItems:'center',flexDirection:'row',top:window.height-138,borderTopWidth:0,borderTopColor:'#dddddd',padding:32,backgroundColor:'#fc004f'}}>
          
          <TouchableOpacity underlayColor="#333" onPress = {() => this.showPayMode()} style={{flex:1}}>
          <Image
                style={{width:32, height:32,opacity:1.0,marginLeft:10}}
                source = {require('../../assets/icons/trans.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity underlayColor="#333" onPress = {() => this.showTransactionMode()} style={{flex:1}}>
          <Image
                style={{width:40, height:40,opacity:1.0,margin:18}}
                source = {require('../../assets/icons/invoice.png')}
          />
          </TouchableOpacity>                 
          
          <TouchableOpacity underlayColor="#333" onPress = {() => this.showPayMode()} style={{flex:1}}>
          <Image
                style={{width:32, height:32,opacity:1.0,margin:18}}
                source = {require('../../assets/icons/trans.png')}
          />
          </TouchableOpacity>  

          <TouchableOpacity underlayColor="#333" onPress = {() => this.showTransactionMode()} style={{flex:1}}>
          <Image
                style={{width:40, height:40,opacity:1.0,margin:18}}
                source = {require('../../assets/icons/invoice.png')}
          />
          </TouchableOpacity>  

        </View>
      </View>
    );
  }
}
