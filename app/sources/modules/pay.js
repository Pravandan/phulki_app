import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  Animated,
  StyleSheet,
  Image
} from 'react-native';


export class Pay extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
        paymentDone : false,
        pan     : new Animated.ValueXY(),  //Step 1
        paymentSuccess : false,
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

         <Text style={{top:28,fontSize:16,color:'#333',textAlign:'center'}}>Big Bazaar is requesting payment</Text>
        <Text style={{top:38,fontSize:16,color:'#333',textAlign:'center'}}>Rs. 5000</Text>


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
                                  ,fontWeight:'bold'
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
                                    top:260,
                                    zIndex:100,
                    }}

              >

                  <Image
                        style={{width:24, height:24,opacity:1.0,margin:18}}
                        source = {require('../../../assets/icons/tick.png')}
                   />

              </View>   
        </View>

        </View>
      
       }
       {this.state.paymentSuccess &&
        <View>
          <Text>Transaction Successfull</Text>
        </View>
       }
       {this.state.paymentDone &&
          <View style={{flex:1,alignItems:'center',top:124}}>
            <Text style={{fontSize:24,color:'#12bc59',fontWeight:'bold'}}>SUCCESS</Text>
            <Text style={{fontSize:16}}>You have paid at Big Bazaar</Text>
            <Text style={{color:'#333'}}>Amount - Rs.5000</Text>
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
                        top:90,

  },
});
