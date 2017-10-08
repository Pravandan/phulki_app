import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
} from 'react-native';

export class Payment extends Component<{}> {
	constructor(props){
		super(props);
		this.state={
			transactionStatus : 'Initiated',
			transSuccess : false,
		}
	}

	render() {
		return(		<View>
						{!this.state.transSuccess && 
							<View style={{flex:1}}>
								<Text>Transaction {this.state.transactionStatus}</Text>
							</View>
						}
						{this.state.transSuccess &&
							<View>
								<Text>Transaction Successfull</Text>
							</View>
						}
					</View>
			);
	}
}