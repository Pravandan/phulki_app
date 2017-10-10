import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing
} from 'react-native';


export class Profile extends Component<{}> {
  constructor(props){
    super(props);
    this.springValue = new Animated.Value(0.1)
    this.slideValue = new Animated.Value(0);
    this.state={
      
    }
  }
  componentDidMount () {
  this.spring()
  this.animate()
}

animate() {
	Animated.parallel([
		Animated.spring(
    		this.springValue,
   			{
      		toValue: 1,
      		friction: 2.5
    		}
  		),
  		Animated.timing(
	    	this.slideValue,
	    	{
	      	toValue: 1,
	      	duration: 800,
	    	}
	    )
	]).start()
}
spring () {
  this.springValue.setValue(0.1)
}

  render() {
  	const translateX = this.slideValue.interpolate({
  		inputRange: [0, 1],
  		outputRange: [-500, 1]
  	});
  	const translateX1 = this.slideValue.interpolate({
  		inputRange: [0, 1],
  		outputRange: [500, 1]
  	});
  	
    return (
      <View style={{flex:1}}>  
        <View style={{flex:1,paddingTop:10,alignItems:'center',paddingBottom:200}}>
          
          <Animated.Image
                style={{width:120, height:120,opacity:1.0,margin:18, transform: [{scale: this.springValue}]}}
                source = {require('../../../assets/icons/boy.png')}
          />
          <Animated.Text style={{fontSize:18,fontWeight:'bold', transform: [{translateX}]}}> PRAVANDAN CHAND </Animated.Text>
          <Animated.Text style={{fontSize:16, transform: [{translateX: translateX1}]}}> 8750507753 </Animated.Text>
        </View>
      </View>
    );
  }
}
