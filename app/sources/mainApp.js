import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {Splash} from './splash';
import {Home} from './home';

export class MainApp extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      intro : false,
    }
    this.splashCallBack = this.splashCallBack.bind(this);
  }

  splashCallBack = (splashModifyFromChild) => {
    this.setState({
      intro : false,
    });
    console.log('callback came from splash Component');
  }

  render() {
    return (
      <View>  
        {this.state.intro &&
            <Splash childCallBack={this.splashCallBack} />
        }
        {!this.state.intro &&
            <Home />
        }
      </View>
    );
  }
}
