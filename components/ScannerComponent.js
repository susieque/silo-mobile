import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Avatar, ListItem, Badge } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Header from './ui-blocks/HeaderComponent';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import * as Location  from 'expo-location';
import * as Permissions from 'expo-permissions';

class Scanner extends Component {

    constructor(props){
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS, 
            selectedPackage: null,
            // status: 'initialStatus',
            errorMessage:'',
            location:'nowhere yet'
        }
    }

    static navigationOptions = {
        title: 'Scanner' 
    };

    componentDidMount(){
        this._getLocationPermissions();
    }
    
    _getLocationPermissions = async () => {

        // Alert.alert('component did mount is firing');
        
        const { status } = await Permissions.askAsync(Permissions.LOCATION);

        if(status !== 'granted'){
            console.log('Permission not granted');
            this.setState({
                errorMessage: 'Permission not granted'
            })
        }
        this.setState({ status });
        console.log( status );
        //If we make it this far, then we have permission.
        const userLocation = await Location.getCurrentPositionAsync();
        this.setState({ 
            location: userLocation
        })
        console.log(this.state.location);
    }
    
    

    render(){
        // console.log(this.state.status);
        return (
            <SafeAreaView>
                <Header />
                {/* <FlatList
                    data={this.state.packages}
                    renderItem={renderPackageListItem}
                    style={styles.flatlistOverview}
                    keyExtractor={item => item.id.toString()}
                /> */}
            </SafeAreaView>
        );
    }
}

const styles=StyleSheet.create({
    
})

export default Scanner;