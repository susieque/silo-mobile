import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Alert, Text } from 'react-native';
import { Avatar, ListItem, Button, Card, Image, Divider } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import PackageList from './PackageListComponent';
import Header from './ui-blocks/HeaderComponent';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS, 
            selectedPackage: null
        }
    }

    static navigationOptions = {
        title: 'Home'
    };

    render(){
        const { navigate } = this.props.navigation
        
        return (
            <SafeAreaView style={styles.directoryContainer}>
                
                <Header />
                <Text style={styles.bodyText}>Manage equipment and track orders.  Use the scanner to receive deliveries made to the jobsite. </Text>
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
        //marginBottom: 10
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
        textAlign: 'left',
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom:10,
        marginTop:10

        
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
        flex:1,
        backgroundColor: 'white'
    },
    cardContainer: {
        backgroundColor: 'white',
        alignContent: "center"
    },
    cardImage: {
        height:75,
        width: 75,
        resizeMode: 'contain'
    },
    cardTitle: {
        fontSize:40,
        fontWeight: 'bold',
        color: 'darkgray',
        textAlign: 'center'
    },
    cardRow:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'white'
    }
})

export default Home;