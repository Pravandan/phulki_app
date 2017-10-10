import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {Receipt} from './receipt';

const window = Dimensions.get('window');

export class Transaction extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      allTrans : true,
      parReceipt : false,
    }

    this.showAllTrans = this.showAllTrans.bind(this);
    this.showParReceipt = this.showParReceipt.bind(this);
  }

  showAllTrans(){
    this.setState({
      allTrans : true,
      parReceipt : false
    })
  }

  showParReceipt(){
    this.setState({
      allTrans : false,
      parReceipt : true,
    })
  }


  render() {
    return (
      <View>
      {this.state.allTrans &&
          <View style={{flex:1,alignItems:'center'}}>  
            <Text>
              No new Transactions
            </Text>
            <View style={{backgroundColor:'#fc004f',paddingTop:44,paddingBottom:40,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd'}}>
                <Text style={{position:'absolute',fontSize:16,top:14,paddingLeft:16,color:'white',fontWeight:'bold'}}>Big Bazaar</Text>
                <Text style={{position:'absolute',fontSize:14,top:48,paddingLeft:16,color:'white',fontWeight:'bold'}} onPress={() => this.showParReceipt()}>View Receipt</Text>
            </View>
             <View style={{flex:1,backgroundColor:'#401f80',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd',marginTop:10}}>
               <Text style={{position:'absolute',fontSize:16,top:14,paddingLeft:16,color:'white',fontWeight:'bold'}}>Zomato Inc</Text>
              <Text style={{position:'absolute',fontSize:14,top:48,paddingLeft:16,color:'white',fontWeight:'bold'}} onPress={() => this.showParReceipt()}>View Receipt</Text>
            </View>
             <View style={{flex:1,backgroundColor:'#fc004f',padding:44,top:56,borderRadius:8,width:window.width-20,borderWidth:2,borderColor:'#dddddd',marginTop:10}}>
                <Text style={{position:'absolute',fontSize:16,top:14,paddingLeft:16,color:'white',fontWeight:'bold'}}>OLA Inc</Text>
                <Text style={{position:'absolute',fontSize:14,top:48,paddingLeft:16,color:'white',fontWeight:'bold'}} onPress={() => this.showParReceipt()}>View Receipt</Text>
            </View>
          </View>
      }
      {this.state.parReceipt &&

          <Receipt childCallBack={this.showAllTrans} />

      }
      </View>
    );
  }
}
