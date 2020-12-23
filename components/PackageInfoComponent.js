import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, useColorScheme, Alert } from 'react-native';
import { Card, Avatar, Icon } from 'react-native-elements';

import * as DesignColors from '../components/style-resources/ColorSchemes';

//REDUX
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        packages: state.packages
    };
};
class PackageInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            dispatched: false
        }

        //this.dummyButtonAction = this.dummyButtonAction.bind(this);
    }

    static navigationOptions = {
        title: 'Details'
    }

    requestDispatch({number}){
        Alert.alert('package: ' + number + ' will be dispatched');
    }

    markAsReceived({number}){
        Alert.alert('package: ' + number + ' will be received');
    }

    addComment({number}){
        Alert.alert('comment will be added to package: ' + number);
    }

    render(){ 
        // console.log(this.props.navigation.getParam('packageId'));
        const packageId = this.props.navigation.getParam('packageId');
        //alert('Retrieving item: ' + packageId);
        const item = this.props.packages.packages.filter(p => p.id === packageId)[0];

        const RenderPackageDetails = (props) => {
 
            const {item} = props;
            
            if(item){
                return(
                    <SafeAreaView>
                        <View style={{ 
                                backgroundColor: DesignColors.designGrey, 
                                borderRadius: 10,
                                margin:10,
                                padding:10 }}>
                            <Text style={styles.listItemTitle}>{item.number}</Text>
                            <Text style={styles.listItemSubtitle}>{item.job}</Text>
                            <Text style={styles.listItemSubtitle}>{item.description}</Text>
                        </View>
        
                        <View style={styles.cardRow}>
                            <Icon 
                                name={props.dispatched ? 'paper-plane-o' : 'paper-plane-o'}
                                onPress={() => this.requestDispatch(item)}
                                type='font-awesome'
                                color={DesignColors.requestIcon}
                                raised
                                reverse/>
                            <Icon 
                                name={'pencil'}
                                type='font-awesome'
                                color={DesignColors.commentIcon}
                                onPress={() => this.addComment(item)}
                                raised
                                reverse/>
                            <Icon 
                                name={'check'}
                                type='font-awesome'
                                color={DesignColors.receiveIcon}
                                onPress={() => this.markAsReceived(item)}
                                raised
                                reverse/>
                        </View>
                        <Text style={styles.cardHeader}>LOCATION</Text>
                        <Text style={styles.cardBody}>{item.location}{'\n'}</Text>
                        <Text style={styles.cardHeader}>STATUS</Text>
                        <Text style={styles.cardBody}>{item.remaining} out of {item.ordered} units remaining{'\n'}</Text>
                        <Text style={styles.cardHeader}>NOTES</Text>
                        <Text style={styles.cardBody}>{item.notes}</Text>
                    </SafeAreaView>
                );
            }
            return <View />
        }

        return(
            <ScrollView>
                <RenderPackageDetails 
                    item={item} 
                    dispatched={this.state.dispatched} 
                    />
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
        borderRadius: 6,
        flex: 1
    },
    viewContainer: {
        //backgroundColor: '#ffc59d',
        flex:2       
    },
    cardRow:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5
    },
    listItemTitle: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 28
    },

    listContainer: {
        margin: 5,
        padding: 5,
        borderRadius:15
    },
    listItemSubtitle:{
        color: 'white',
        fontSize: 20
    }
})


export default connect(mapStateToProps)(PackageInfo);