import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Alert, Text } from 'react-native';
import { Avatar, ListItem, Button, Card, Image, Divider, Icon } from 'react-native-elements';

function Header(){

    return(
        <View style={{backgroundColor: 'white', height:60}}>
            <View style={styles.cardRow}> 
                <Image 
                    style={styles.cardImage}
                    source={require('../images/orange-avatar-white-bg.png')}/>
                <Text style={{fontSize:22, flex:2, color: 'gray', marginLeft: 10}}>Silo Mobile</Text>
                {/* <Icon 
                    name={'bars'}
                    type='font-awesome'
                    color='#888888'
                    raised
                    
                /> */}
            </View>
            <Divider style={styles.dividerStyle}/>
            {/* <Text style={styles.headerText}>Silo Mobile</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({

    cardImage: {
        height:50,
        width: 50,
        resizeMode: 'contain'
    },
    cardRow:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'white'
    },
    dividerStyle: {
        backgroundColor: '#323232',
        //marginBottom: 10
    }
});

export default Header;