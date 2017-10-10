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

	render(){
		return(
				<View style={{flex:1,alignItems : 'center',top:8}}>
					<Text style={{fontSize:18,paddingTop:16,color:'#333'}}>RECEIPT</Text>
					<Text style={{fontSize:16,padding:0,color:'#333'}}>- -- - -- - - -- - -- - -- - - -- - -- - -- - - --</Text>
					<Text style={{fontSize:16,paddingTop:8,color:'#333'}}>10 October, 2017</Text>
					<Text style={{fontSize:14,padding:4,color:'#333'}}>#e8547-8749</Text>

					<Text style={{fontSize:18,paddingTop:32,color:'#333'}}>AMOUNT - Rs. 478.99</Text>
					<Text style={{fontSize:16,paddingTop:8,color:'#333'}}>TAX @ 18 % - Rs. 78.99</Text>

					<Text style={{fontSize:16,paddingTop:28,color:'#333'}}>TOTAL - Rs. 678.99</Text>

					<Text style={{fontSize:16,paddingTop:18,color:'#333'}}>- -- - -- - - -- - -- - -- - - -- - -- - -- - - --</Text>

					<Text style={{fontSize:12,paddingTop:28,color:'#333',fontWeight:'bold'}}>Issued by Phulki Inc on behalf of</Text>
					<Text style={{fontSize:12,paddingTop:8,color:'#333',fontWeight:'bold'}}>Big Bazaar Ltd</Text>

				</View>
			);
	}
}
