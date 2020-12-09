import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

class Home extends Component {
    
    // static navigationOptions = {
    //     title: 'Home'
    // }

    render(){
        return (
            <View style={{alignItems: 'center'}}>
                <Avatar 
                    rounded 
                    size='xlarge' 
                    marginTop={75} 
                    source={require('./images/orange-avatar-white-bg.png')}/>
                <Text style={{fontSize:36, marginTop:20, color: 'black', fontWeight: 'bold'}}>Silo</Text>
            </View>
        );
    }

}

export default Home;
