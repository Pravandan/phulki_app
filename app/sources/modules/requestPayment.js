import React,{Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput
} from 'react-native';

export class RequestPayment extends Component<{}> {
	constructor(props){
		super(props);
		this.state={
			mobileNumber : '8750507753',
		}
	}


	render(){
		return(
					<View style={{alignItems:'center'}}>
						<Text style={{paddingTop:16,fontSize:16}}>Enter Mobile Number</Text>
						<TextInput
						        editable = {true}
						        maxLength = {10}
						        value = {this.state.mobileNumber}
						        onChangeText = {(mobileNumber) => this.setState({mobileNumber})}
						        style = {{flex:1,top:10,padding:80,color:'black',borderWidth:2,borderColor:'#333',fontSize:20}}
						        keyboardType = {'phone-pad'}
						        autoFocus = {true}
      					/>
					</View>
			);
	}
}