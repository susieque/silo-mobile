import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Image, Alert } from 'react-native';
import { Avatar, ListItem, Button, Card } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import PackageList from './PackageListComponent';

class Directory extends Component {

    constructor(props){
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS, 
            selectedPackage: null
        }
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render(){
        const { navigate } = this.props.navigation
        
        return (
            <View style={styles.directoryContainer}>
                {/* <Card style={styles.cardContainer}>
                    <Card.Image 
                        style={styles.cardImage} 
                        source={require('./images/orange-avatar-white-bg.png')} />
                    <Card.Title style={styles.cardTitle}> 
                        SILO Mobile
                    </Card.Title>
                    
                </Card> */}
                <Button 
                    title="View Package List"
                    onPress={() => navigate('PackageList', { packages: this.state.PACKAGES})}
                    type='clear'
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.primaryButtonContainer}
                    />
                <Button 
                    title="Scan"
                    onPress={() => Alert.alert('Activating Scanner')}
                    type='clear'
                    titleStyle={styles.buttonTitle}
                    containerStyle={styles.primaryButtonContainer}
                    />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    flatlistOverview: {
        margin:5
    },
    buttonTitle: {
        color: 'black',
        fontSize:20,
        
    },
    primaryButtonContainer: {
        color: 'white',
        backgroundColor: '#ffc59d',
        borderColor: 'white',
        marginTop:5,
        marginLeft:0,
        marginRight:0,
        textAlignVertical:'center'
    },
    directoryContainer: {
        paddingTop: 5,
        margin:0
    },
    cardContainer: {
        backgroundColor: 'lightgray',
        alignContent: "center"
    },
    cardImage: {
        resizeMode:'center',
        alignItems: "flex-end"
    },
    cardTitle: {
        fontSize:40,
        fontWeight: 'bold',
        color: 'darkgray'
    }

})

export default Directory;