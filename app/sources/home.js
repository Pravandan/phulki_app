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
import {RequestPayment} from './modules/requestPayment';

export class Home extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      payMode : false,
      transactionMode : false,
      profileMode : false,
      requestMode : false,
    }
    this.showPayMode = this.showPayMode.bind(this);
    this.showTransactionMode = this.showTransactionMode.bind(this);
    this.showProfileMode = this.showProfileMode.bind(this);
    this.showRequestMode = this.showRequestMode.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  showPayMode(){
    this.setState({
      payMode : true,
      transactionMode : false,
      profileMode : false,
      requestMode : false,
    });
  }

  showTransactionMode(){
    this.setState({
      payMode : false,
      transactionMode : true,
      profileMode : false,
      requestMode : false,
    });
  }

  showProfileMode(){
    this.setState({
      payMode : false,
      transactionMode : false,
      profileMode : true,
      requestMode : false,
    })
  }

  showRequestMode(){
    this.setState({
       requestMode : true,
    });
  }


  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1,alignItems:'center',flexDirection:'row',   justifyContent:'center',
top:0,borderBottomColor:'#dddddd',backgroundColor:'#633ea5',
    borderBottomWidth:2,padding:24,width:window.width}}>
          <Text style={{fontSize:20,color:'white'}}>PHULKI</Text>
        </View>

        {this.state.transactionMode &&
          
          <Transaction />
          
        }

        {this.state.payMode &&
          <View>
          {!this.state.requestMode &&
            <Pay />
          }
          {this.state.requestMode &&
            <RequestPayment />
          }
          {!this.state.requestMode && 
            <PayModes childCallBack={this.showRequestMode} />
          }
          </View>
        }

        {this.state.profileMode &&

          <Profile />

        }

     
        <View style={{flex:1,alignItems:'center',flexDirection:'row',top:window.height-136,borderTopWidth:0,borderTopColor:'#dddddd',padding:34,backgroundColor:'#633ea5'}}>
          
          <TouchableOpacity underlayColor="#333" onPress = {() => this.showPayMode()} style={{flex:1}}>
          <Image
                style={{width:24, height:24,opacity:1.0,marginLeft:10}}
                source = {require('../../assets/icons/trans.png')}
          />
          <Text style={{color:'white',fontSize:8,paddingLeft:11,paddingTop:4}}>PAY</Text>
          </TouchableOpacity>

          <TouchableOpacity underlayColor="#333" onPress = {() => this.showTransactionMode()} style={{flex:1}}>
          <Image
                style={{width:32, height:32,opacity:1.0,marginLeft:18}}
                source = {require('../../assets/icons/invoice.png')}
          />
          <Text style={{color:'white',fontSize:8,paddingLeft:0,paddingTop:4}}>TRANSACTIONS</Text>
          </TouchableOpacity>                 
          
          <TouchableOpacity underlayColor="#333" onPress = {() => this.showPayMode()} style={{flex:1}}>
          <Image
                style={{width:24, height:24,opacity:1.0,marginLeft:18}}
                source = {require('../../assets/icons/trans.png')}
          />
          <Text style={{color:'white',fontSize:8,paddingLeft:20,paddingTop:4}}>PAY</Text>
          </TouchableOpacity>  

          <TouchableOpacity underlayColor="#333" onPress = {() => this.showProfileMode()} style={{flex:1}}>
          <Image
                style={{width:28, height:28,opacity:1.0,marginLeft:18}}
                source = {require('../../assets/icons/man-user.png')}
          />
          <Text style={{color:'white',fontSize:8,paddingLeft:14,paddingTop:4}}>ACCOUNT</Text>
          </TouchableOpacity>  

        </View>
      </View>
    );
  }
}
