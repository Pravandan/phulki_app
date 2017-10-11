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
      requestMode : false,
      offlineMode : false,
    }
  }

  showRequestMode(){
    this.setState({
      requestMode : true,
      offlineMode : false,
    });
    this.props.childCallBack();
  }

  showOffileMode(){
    this.setState({
      requestMode : false,
      offlineMode : true,
    })
  }


  render() {
    return (
      <View style={{flex:1,top:window.height-186,alignItems:'stretch',flexDirection:'row'}}>  
      
      {!this.state.offlineMode &&
        <TouchableOpacity style={{flex:1,paddingBottom:38,backgroundColor:'#fc004f',alignItems:'center',paddingTop:14}} onPress = {() => this.showRequestMode()}>
            <Text style={{fontSize:16,color:'white',fontFamily: 'Montserrat-Regular'}}>REQUEST</Text>
        </TouchableOpacity>
      }
      {!this.state.requestMode &&
         <TouchableOpacity style={{flex:1,paddingBottom:38,backgroundColor:'#fc004f',alignItems:'center',paddingTop:14}}>
            <Text style={{fontSize:16,color:'white',fontFamily: 'Montserrat-Regular'}}>GO OFFLINE</Text>
        </TouchableOpacity>
      }
      </View>
    );
  }
}
