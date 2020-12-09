import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card, Avatar, Icon } from 'react-native-elements';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';

function RenderPackageDetails(props){
    
    const {item} = props;
    
    if(item){
        return(
            <SafeAreaView>
                        {/* <Avatar rounded size='small' source={require('./images/orange-avatar-white-bg.png')}/> */}
                <Card style={styles.cardContainer}>
                    <Card.Title style={{backgroundColor: '#e3e3e3', paddingBottom: 10}}>
                        <View style={styles.viewContainer}>
                            <Text style={styles.cardTitle}>{item.number}</Text>
                            <Text style={styles.cardSubtitle}>{item.job}</Text>
                            <Text style={styles.cardSubtitle}>{item.description}</Text>
                        </View>
                    </Card.Title>
                    <View style={styles.cardRow}>
                        <Icon 
                            name={props.dispatched ? 'paper-plane-o' : 'paper-plane-o'}
                            type='font-awesome'
                            color='#1a7d00'
                            raised
                            reverse/>
                        <Icon 
                            name={'pencil'}
                            type='font-awesome'
                            color='#3662a6'
                            // color='#0616ae'
                            // color='#f36a0c'
                            raised
                            reverse/>
                        <Icon 
                            name={'check'}
                            type='font-awesome'
                            color='#e90c25'
                            // color='#f13f53'
                            raised
                            reverse/>
                    </View>
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
            jobs: JOBS,
            dispatched: false
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
            <ScrollView>
                <RenderPackageDetails 
                    item={item} 
                    dispatched={this.state.dispatched} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardImage: {
        resizeMode: "cover",
    },

    cardTitle: {
        fontSize: 28,
        textAlign:"left",
        padding: 10,
        // backgroundColor: '#ffc59d'
    },
    cardSubtitle: {
        fontSize:18,
        paddingLeft:10,
        paddingRight:10
    },
    cardHeader: {
        fontSize:18,
        fontWeight: 'bold',
        paddingLeft:10,
        paddingRight:10
        
    },
     cardBody: {
        fontSize: 16,
        fontStyle: 'italic',
        paddingLeft:10,
        paddingRight:10
        
    },
    cardContainer: {
        marginTop:0,
        marginBottom:0,
        flex: 1
    },
    viewContainer: {
        // backgroundColor: '#ffc59d',
        flex:2       
    },
    cardRow:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    }
})


export default PackageInfo;