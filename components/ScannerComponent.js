import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Avatar, ListItem, Badge } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import Header from './ui-blocks/HeaderComponent';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';

class Scanner extends Component {

    constructor(props){
        super(props);
        this.state = {
            packages: PACKAGES,
            jobs: JOBS, 
            selectedPackage: null
        }
    }

    static navigationOptions = {
        title: 'Scanner'
    };

    render(){
        // const { navigate } = this.props.navigation
        // const renderPackageListItem = ({item}) => {
        //     return (
        //         <ListItem 
        //             onPress={() => navigate('PackageInfo', {packageId: item.id})}
        //             //onPress={() => console.log(item.id)}
        //             Component={TouchableScale}
        //             friction={90} //
        //             tension={100} // These props are passed to the parent component (here TouchableScale)
        //             activeScale={0.95}
        //             containerStyle={styles.listContainer} //
        //             linearGradientProps={{
        //             //   colors: ['#FFA262', '#DA620B'],
        //             //   colors: ['#239f03', '#1a7d00'],
        //             //   colors: ['#239f03', '#1a7d00'],
        //             // colors: ['#587db9', '#3662a6'],
        //             // colors: ['#f39f0c', '#fbb741'],
        //             colors: ['#ffa262', '#eca06c'],
        //             start: { x: 1, y: 0 },
        //             end: { x: 0.2, y: 0 },
        //         }}>
        //             <Avatar size='large' rounded source={require('./images/orange-avatar-white-bg.png')} />
        //             <ListItem.Content>
        //                 <ListItem.Title style={styles.listItemTitle}>
        //                     {item.number}
        //                 </ListItem.Title>
        //                 <ListItem.Subtitle style={styles.listItemSubtitle}>
        //                     {item.job} {'\n'}
        //                     {item.description}
        //                 </ListItem.Subtitle>
        //             </ListItem.Content>
        //         </ListItem>
        //     );
        // };

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