import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PanResponder,
  Animated,
  StyleSheet
} from 'react-native';


export class Pay extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
        paymentDone : true,
        pan     : new Animated.ValueXY()   //Step 1
    };

    this.panResponder = PanResponder.create({    //Step 2
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{ //Step 3
            dx : this.state.pan.x,
            dy : this.state.pan.y
        }]),
        onPanResponderRelease           : (e, gesture) => {
        Animated.spring(            //Step 1
            this.state.pan,         //Step 2
            {toValue:{x:0,y:0}}     //Step 3
        ).start();
    }
    });
  }


  render() {
    let { pan } = this.state;

  // Calculate the x and y transform from the pan value
  let [translateX, translateY] = [pan.x, pan.y];

  // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
  let imageStyle = {transform: [{translateX}, {translateY}]};
    return (

      <View>  
       {!this.state.paymentDone&&
           <Animated.View 
        {...this.panResponder.panHandlers}
        style={[imageStyle, styles.circle]}
        >
                    
                    <Text style={{marginTop   : 50,
                                  marginLeft  : 5,
                                  marginRight : 5,
                                  fontSize:24,
                                  textAlign   : 'center',
                                  color       : '#fff'
                    }}>

                        PAY

                    </Text>
        
        </Animated.View>
      
       }
      </View>
 
    );
  }
}


const styles = StyleSheet.create({
  circle: {
    backgroundColor     : '#1abc9c',
                        width               : 144,
                        height              : 144,
                        borderRadius        : 72,
                        top:120
  },
});
