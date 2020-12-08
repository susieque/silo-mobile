import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Card } from 'react-native-elements';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';

function RenderPackage({item}){
    if(item){
        return(
            <SafeAreaView>
                <Card style={styles.cardContainer}>
                    <Card.Title style={styles.cardTitle}>
                        {item.number} {'\n'}
                        {item.job} {'\n'}
                        {item.description}
                    </Card.Title>
                    <Text style={styles.cardHeader}>LOCATION</Text>
                    <Text style={styles.cardBody}>{item.location}{'\n'}</Text>
                    <Text style={styles.cardHeader}>STATUS</Text>
                    <Text style={styles.cardBody}>{item.remaining} out of {item.ordered} units remaining{'\n'}</Text>
                    <Text style={styles.cardHeader}>NOTES</Text>
                    <Text style={styles.cardBody}>{item.notes}</Text>
                    {/* <Card.Image style={styles.cardImage} source={require('./images/boxes.jpeg')}/> */}
                </Card>
            </SafeAreaView>
        );
    }

    return <View />
}

class PackageInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS
        }
    }

    static navigationOptions = {
        title: 'Details'
    }

    render(){ 
        // console.log(this.props.navigation.getParam('packageId'));
        const packageId = this.props.navigation.getParam('packageId');
        const item = this.state.packages.filter(p => p.id === packageId)[0];

        return(
            <RenderPackage item={item} />
        );
    }
}

const styles = StyleSheet.create({
    cardImage: {
        resizeMode: "cover",
    },

    cardTitle: {
        fontSize: 22,
        textAlign:"left",
        padding: 5,
        backgroundColor: '#e3e3e3'
    },
    cardHeader: {
        fontSize:18,
        fontWeight: 'bold'
        
    },
     cardBody: {
        fontSize: 16,
        fontStyle: 'italic'
        
    },

    cardContainer: {
        marginTop:0,
        marginBottom:0,
        backgroundColor: 'lightgray'
    }
})


export default PackageInfo;