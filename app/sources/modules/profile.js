import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  Animated,
  Easing,
  ScrollView
} from 'react-native';

const window = Dimensions.get('window');

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
        <View style={{flex:1,paddingTop:10,marginBottom: 38, alignItems:'center',paddingBottom:200}}>
          
          <Animated.Image
                style={{width:120, height:120,opacity:1.0,margin:18, transform: [{scale: this.springValue}]}}
                source = {require('../../../assets/icons/boy.png')}
          />
          <Animated.Text style={{fontSize:18,fontWeight:'bold', transform: [{translateX}]}}> SHASHWAT JOLLY </Animated.Text>
          <Animated.Text style={{fontSize:18, transform: [{translateX}]}}> shashwat.jolly@gmail.com </Animated.Text>
          <Animated.Text style={{fontSize:16, transform: [{translateX: translateX1}]}}> 8750507753 </Animated.Text>
        </View>
        <TouchableNativeFeedback>
        	<View style={{flex:1,paddingBottom:38,marginTop: 16, backgroundColor:'#fc004f',alignItems:'center',paddingTop:16}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>My Wallet Balance</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
        	<View style={{flex:1,paddingBottom:38,marginTop: 16, backgroundColor:'#fc004f',alignItems:'center',paddingTop:16}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Help</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
        	<View style={{flex:1,paddingBottom:38,marginTop: 16, backgroundColor:'#fc004f',alignItems:'center',paddingTop:16}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>About</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
        	<View style={{flex:1,paddingBottom:38,marginTop: 16, backgroundColor:'#fc004f',alignItems:'center',paddingTop:16}}>
            <Text style={{fontSize:16,color:'white',fontWeight:'bold'}}>Logout</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
