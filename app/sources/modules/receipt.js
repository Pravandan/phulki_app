/*
	returns a rendered receipt component, values needed are obtained as props from the parent component which call it
*/

import React ,{Component} from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';

export class Receipt extends Component<{}>{
	constructor(props){
		super(props);
	}

	hideReceipt(){
		this.props.childCallBack();
	}

	render(){
		return(
				<View style={{flex:1,alignItems : 'center',top:8}}>
					<Text style={{fontSize:18,paddingTop:4,color:'#333',fontFamily: 'Montserrat-Regular'}}>RECEIPT</Text>
					<Text style={{fontSize:16,padding:0,color:'#333',fontFamily: 'Montserrat-Regular'}}>- -- - -- - - -- - -- - -- - - -- - -- - -- - - --</Text>
					<Text style={{fontSize:16,paddingTop:8,color:'#333',fontFamily: 'Montserrat-Regular'}}>10 October, 2017</Text>
					<Text style={{fontSize:14,padding:4,color:'#333',fontFamily: 'Montserrat-Regular'}}>#e8547-8749</Text>

					<Text style={{fontSize:18,paddingTop:16,color:'#333',fontFamily: 'Montserrat-Regular'}}>AMOUNT - Rs. 478.99</Text>
					<Text style={{fontSize:16,paddingTop:8,color:'#333',fontFamily: 'Montserrat-Regular'}}>TAX @ 18 % - Rs. 78.99</Text>

					<Text style={{fontSize:16,paddingTop:28,color:'#333',fontFamily: 'Montserrat-Regular'}}>TOTAL - Rs. 678.99</Text>

					<Text style={{fontSize:16,paddingTop:18,color:'#333',fontFamily: 'Montserrat-Regular'}}>- -- - -- - - -- - -- - -- - - -- - -- - -- - - --</Text>

					<Text style={{fontSize:12,paddingTop:8,color:'black',fontFamily: 'Montserrat-Regular'}}>Issued by Phulki Inc on behalf of</Text>
					<Text style={{fontSize:12,paddingTop:8,color:'black',fontFamily: 'Montserrat-Regular'}}>Big Bazaar Ltd</Text>

					<Text style={{fontSize:18,paddingTop:12,color:'#333', color:'red',fontFamily: 'Montserrat-Regular'}} onPress={() => this.hideReceipt()}>BACK</Text>

				</View>
			);
	}
}
