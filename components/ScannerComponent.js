import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';
import { Avatar, ListItem, Badge } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Header from './ui-blocks/HeaderComponent';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import * as Location  from 'expo-location';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(props){

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         packages: PACKAGES,
    //         jobs: JOBS, 
    //         selectedPackage: null,
    //         // status: 'initialStatus',
    //         errorMessage:'',
    //         location:'nowhere yet'
    //     }
    // }

    // static navigationOptions = {
    //     title: 'Scanner' 
    // };

    // componentDidMount(){
    //     this._getLocationPermissions();
    //     this._getCameraPermissions();
    // }
    
    // _getLocationPermissions = async () => {

    //     // Alert.alert('component did mount is firing');
        
    //     const { status } = await Permissions.askAsync(Permissions.LOCATION);

    //     if(status !== 'granted'){
    //         console.log('Permission not granted');
    //         this.setState({
    //             errorMessage: 'Permission not granted'
    //         })
    //     }
    //     //this.setState({ status });
    //     console.log( status );
    //     //If we make it this far, then we have permission.
    //     const userLocation = await Location.getCurrentPositionAsync();
    //     this.setState({ 
    //         location: userLocation
    //     })
    //     console.log(this.state.location);
    // }
    
    // _getCameraPermissions = async () => {

    //     // Alert.alert('component did mount is firing');
        
    //     const { status } = await Permissions.askAsync(Permissions.CAMERA);

    //     if(status !== 'granted'){
    //         console.log('Permission not granted');
    //         this.setState({
    //             errorMessage: 'Permission not granted'
    //         })
    //     }
    //     console.log( status );
        
    // }
    

    
    
    // render(){

        //_getCameraPermissions();

        const { navigate } = props.navigation;

        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
        
        const handleBarCodeScanned = ({ type, data }) => {
            setScanned(true);
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
            // navigate('PackageInfo', {packageId: data});
            setScanned(false);
            navigate('Home');
        };
        
        useEffect(() => {
            (async () => {
              const { status } = await BarCodeScanner.requestPermissionsAsync();
              setHasPermission(status === 'granted');
            })();
          }, []);


        if(hasPermission === null) {
            return <Text>Requesting for camera permission</Text>
        }
        if(hasPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>Access to the Camera has been denied.</Text>
                    <Text>To fix this, go to "Settings", then choose "Silo"</Text>
                    <Text>and toggle the Camera setting to enable it.</Text>
                </View>
                );
        }  

        return (
            <SafeAreaView>
                <Header />
                <View style={styles.container}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button title={'Tap to Scan Again'} 
                        onPress={() => setScanned(false)}/>}
                </View>
            </SafeAreaView>
        );
    // }
}


_getCameraPermissions = async () => {

    // Alert.alert('component did mount is firing');
    
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if(status !== 'granted'){
        console.log('Permission not granted');
        this.setState({
            errorMessage: 'Permission not granted'
        })
    }
    console.log( status );
    
}

// _getLocationPermissions = async () => {

    //     // Alert.alert('component did mount is firing');
        
    //     const { status } = await Permissions.askAsync(Permissions.LOCATION);

    //     if(status !== 'granted'){
    //         console.log('Permission not granted');
    //         this.setState({
    //             errorMessage: 'Permission not granted'
    //         })
    //     }
    //     //this.setState({ status });
    //     console.log( status );
    //     //If we make it this far, then we have permission.
    //     const userLocation = await Location.getCurrentPositionAsync();
    //     this.setState({ 
    //         location: userLocation
    //     })
    //     console.log(this.state.location);
    // }


const styles=StyleSheet.create({

    container: {
        height:800,
        width: 800,
        // justifyContent: 'flex-start',
        // flex:1,
        // margin: 0,
        // backgroundColor: '#ffc59d'
    },
})

// export default Scanner;