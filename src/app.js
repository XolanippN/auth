import React,{Component} from 'react';
import { Text, View }  from 'react-native';
import {Header} from './Components/Common'

class App extends Component{
    render(){
      return (
       <View>
       <Header headerText='Authentication'/>
            <Text> An App!</Text>
      </View>  
      )     
    };
};

export default App;
