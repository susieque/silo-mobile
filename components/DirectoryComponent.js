import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Alert, Text } from 'react-native';
import { Avatar, ListItem, Button, Card, Image, Divider } from 'react-native-elements';
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
            <SafeAreaView style={styles.directoryContainer}>
                {/* <Card> 
                    <Card.Image 
                        style={styles.cardImage} 
                        source={require('./images/orange-avatar-white-bg.png')} />
                    <Card.FeaturedTitle 
                        style={styles.cardTitle}
                        image={require('./images/orange-avatar-white-bg.png')}> 
                        Silo Mobile App                        
                    </Card.FeaturedTitle>
                </Card> */}
                <View style={{backgroundColor: 'white'}}>
                    <Image style={styles.cardImage} source={require('./images/orange-avatar-white-bg.png')}/>
                    <Divider style={styles.dividerStyle}/>
                    <Text style={styles.headerText}>Silo Mobile</Text>
                    <Text style={styles.bodyText}>Manage equipment and track orders.  Use the scanner to receive deliveries made to the jobsite. </Text>
                </View>
                <Button 
                    title="View Package List"
                    onPress={() => navigate('PackageList', { packages: this.state.packages})}
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
            </SafeAreaView>
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
    dividerStyle: {
        backgroundColor: '#323232',
        marginBottom: 10
    },

    headerText: {
        textAlign:'center', 
        fontSize:36,
        fontWeight: 'bold', 
        color:'gray',
        marginBottom: 10,
        backgroundColor: 'white'
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 20,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom:10

        
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
        margin:0,
        backgroundColor: 'white'
    },
    cardContainer: {
        backgroundColor: 'white',
        alignContent: "center"
    },
    cardImage: {
        height:100,
        width: 'auto',
        resizeMode: 'contain'
    },
    cardTitle: {
        fontSize:40,
        fontWeight: 'bold',
        color: 'darkgray',
        textAlign: 'center'
    },
   

})

export default Directory;