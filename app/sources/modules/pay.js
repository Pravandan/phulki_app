import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {Receipt} from './receipt';

const window = Dimensions.get('window');



export class Pay extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
        paymentDone : false,
        pan     : new Animated.ValueXY(),  //Step 1
        paymentSuccess : false,
        seeReceipt : false,
    };

    this.panResponder = PanResponder.create({    //Step 2
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{ //Step 3
           
            dy : this.state.pan.y
        }]),
        onPanResponderRelease           : (e, gesture) => {
        if(this.isDropZone(gesture)){ //Step 1
                this.setState({
                    paymentDone : true //Step 3
                });
            }else{
                Animated.spring(
                    this.state.pan,
                    {toValue:{x:0,y:0}}
                ).start();
            }
        }
    });

    this.showReceipt = this.showReceipt.bind(this);

  }

  isDropZone(gesture){     //Step 2
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY > dz.y + dz.height;
}

  setDropZoneValues(event){      //Step 1
    this.setState({
        dropZoneValues : event.nativeEvent.layout
    });
}

  showReceipt(){
    this.setState({
      seeReceipt : true,
    });
  }


  render() {
    let { pan } = this.state;

  // Calculate the x and y transform from the pan value
  let [translateX, translateY] = [pan.x, pan.y];

  // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
  let imageStyle = {transform: [{translateX}, {translateY}]};


    return (

      <View style={{flex:1}}>  
       {!this.state.paymentDone&&
          <View>

         <Text style={{top:28,fontSize:16,color:'#333',textAlign:'center',fontFamily: 'Montserrat-Regular'}}>Big Bazaar is requesting payment</Text>
        <Text style={{top:38,fontSize:16,color:'#333',textAlign:'center',fontFamily: 'Montserrat-Regular'}}>Rs. 5000</Text>


          <View style={{flex:1,alignItems:'center'}}> 

           <Animated.View 
        {...this.panResponder.panHandlers}
        style={[imageStyle, styles.circle]}
        >
                    
                    <Text style={{marginTop   : 25,
                                  marginLeft  : 5,
                                  marginRight : 5,
                                  fontSize:18,
                                  textAlign   : 'center',
                                  color       : '#fff'
                                  ,
                                 fontFamily: 'Montserrat-Regular'
                    }}>

                        PAY

                    </Text>
        
        </Animated.View>



        </View>

        <View style={{alignItems:'center'}}>
              <View 

                    onLayout={this.setDropZoneValues.bind(this)}

                    style={{        
                                    backgroundColor     : '#07b797',
                                    width               : 60,
                                    height              : 60,
                                    borderRadius        : 30,
                                    top:240,
                                    zIndex:100,
                    }}

              >

                  <Image
                        style={{width:24, height:24,opacity:1.0,margin:18}}
                        source = {require('../../../assets/icons/tick.png')}
                   />

              </View>   
        </View>

        <View style={{flex:1,alignItems:'center',top:window.height-270}}>
              <Text style={{color:'#d8081d',fontSize:16,fontFamily: 'Montserrat-Regular'}}> X DECLINE </Text>
        </View>

        
        </View>
      
       }
       {this.state.paymentSuccess &&
        <View>
          <Text>Transaction Successfull</Text>
        </View>
       }
       {this.state.paymentDone && !this.state.seeReceipt &&
          <View style={{flex:1,alignItems:'center',top:124}}>
            <Text style={{fontSize:18,color:'#12bc59',fontWeight:'bold'}}>TRANSACTION SUCCESSFULL</Text>
            <Text style={{fontSize:16}}>You have paid at Big Bazaar</Text>
            <Text style={{color:'#333'}}>Amount - Rs.5000</Text>
            <Text style={{color:'#333',padding:10}}># e587 - 87459</Text>

            <TouchableOpacity style={{flex:1,paddingBottom:32,backgroundColor:'#633ea5',alignItems:'center',borderRadius:4,paddingLeft:20,paddingRight:20,paddingTop:8,top:40}} onPress={() => this.showReceipt()}>
              <Text style={{color:'#333',fontSize:18,paddingBottom:120,color:'white'}}>VIEW RECEIPT</Text>
            </TouchableOpacity>
          </View>
       }

       {this.state.paymentDone && this.state.seeReceipt &&

          <View>
            <Receipt />
          </View>

       }

      </View>
 
    );
  }
}


const styles = StyleSheet.create({
  circle: {

    backgroundColor     : '#401f80',
                        width               : 80,
                        height              : 80,
                        borderRadius        : 40,
                        top:65,

  },
});
