import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export class Splash extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      called : false,
    }
    this.hideSplash = this.hideSplash.bind(this);
  }

  hideSplash(){
    console.log('splah hidden callback function called');
    this.props.childCallBack();
  }

  render() {
    return (
      <View style={{backgroundColor:'#633ea5',height:window.height,alignItems:'center'}}>
         <Text style={{color:'white',fontSize:64,paddingTop:100,fontFamily: 'Montserrat-Regular'}}>
           phulki
          </Text>
           <Text style={{color:'white',fontSize:14,paddingTop:10,fontStyle:'italic',fontFamily: 'Montserrat-Regular'}}>
            Bringing Receipts to Cloud
          </Text>
        <TouchableOpacity onPress = {() => this.hideSplash()} style={{backgroundColor:'#07b797',top:260,paddingTop:10,paddingBottom:10,paddingLeft:60,paddingRight:60,borderRadius:4}}>
          <Text style={{color:'white',fontSize:16,fontFamily: 'Montserrat-Regular'}}>
           CONTINUE
          </Text>
        </TouchableOpacity>
        
          <Text style={{color:'white',fontSize:12,top:270,fontFamily: 'Montserrat-Regular'}}>
           Right Now, we are invite only
          </Text>
        
      </View>
    );
  }
}

