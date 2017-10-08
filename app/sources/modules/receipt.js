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
				<View>
				</View>
			);
	}
}
