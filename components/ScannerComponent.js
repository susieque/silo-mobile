import React, { Component } from 'react';
import { Alert, View, Text, Vibration, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { PACKAGES } from '../shared/packages';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

class Scanner extends Component {

    constructor(props) {
        super(props);

        this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
        this.setScanned = this.setScanned.bind(this);
        this.scannedCode = null;

        this.state = {
            packages: PACKAGES,
            hasCameraPermissions: this._getCameraPermissions(),
            scannedItem: null,
            scanned: false,
            buttonTitle: 'Scan'
        };
    }

    async ComponentDidMount() {
        await this._getCameraPermissions();
        //const { status } = await Permissions.askAsync(Permissions.CAMERA);
        //this.setState({hasCameraPermissions: status === 'granted'});
        await this.resetScanner();
    }

    setScanned(bool){
        this.setState({scanned: bool});
        console.log('Current value of scanned: ' + this.state.scanned);
        if(bool){
            this.setState({buttonTitle: 'Re-Scan'});
        }
        else{
            this.setState({buttonTitle: 'Scan'});
        }
    }

    renderAlert(title, message) {
        Alert.alert(
            title,
            message,
            [
                { text: 'OK', onPress: () => this.resetScanner()},
            ],
            { cancelable: true }
        );
    }

    _getCameraPermissions = async () => {
        
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
    
        if(status !== 'granted'){
            console.log('Permission not granted');
            this.setState({
                errorMessage: 'Permission not granted'
            })
        }
        
        this.setState({hasCameraPermissions: { status }});
        console.log('getCameraPermissions: ' + status );
        
    }

    handleBarCodeScanned({ type, data }) {

        this.setScanned(true);
        
        if(type.startsWith('org.iso.Code128')){
            //this.resetScanner();
            const scannedPackage = this.state.packages.filter(p => p.number === data)[0];
            if(scannedPackage){
                this.props.navigation.navigate('PackageInfo', { packageId: scannedPackage.id });
            }
            else{
                alert(`${data} is not a recognized package number`);
                return;
            }
        } else if (type.startsWith('org.iso.QRCode')){
            //Do something for QR Code
            console.log(`QRCode scanned: ${ data }`);
            //this.resetScanner();
        } else {
            this.renderAlert(
                'This barcode is not supported.',
                `${type} : ${data}`,
            );
        }
    }

    renderMessage() {
        if(this.state.scannedItem && this.state.scannedItem.type){
            const {type, data } = this.state.scannedItem;
            return (
                <Text style={styles.scanScreenMessage}>
                    {`Scanned \n ${type} \n ${data}`}
                </Text>
            );
        }
        return <Text style={styles.scanScreenMessage}>Focus the barcode to scan.</Text>
    }

    resetScanner() {
        this.scannedCode = null;
        this.setState({
            scannedItem: {
                type: null,
                data: null
            }
        });
    }

    render(){
        
        //const { hasCameraPermissions } = this.state;

        //this._getCameraPermissions();
        //console.log('from render:' + this.state.hasCameraPermissions.status);
        
        if(this.state.hasCameraPermissions === null){
            //this._getCameraPermissions();
            return (
                <Text>Requesting for camera permissions</Text>
            );
        }
        if(this.state.hasCameraPermissions === false) {
            return (
                <View>
                    <Text>Access to the Camera has been denied.</Text>
                    <Text>To fix this, go to "Settings", then choose "Silo"</Text>
                    <Text>and toggle the Camera setting to enable it.</Text>
                </View>
            );
        }  
        return(
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <BarCodeScanner 
                        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFill}/>
                    {this.renderMessage()}
                    <Button title={this.state.buttonTitle}
                            
                            onPress={() => this.setScanned(false)}/>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 0,
      backgroundColor: '#fff',
    },
    scanScreenMessage: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:5
    }
  });

export default Scanner;