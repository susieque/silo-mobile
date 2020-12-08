import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import { SafeAreaView } from 'react-native';
import PackageInfo from './PackageInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        PackageInfo: { screen: PackageInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#b84D05',
                // backgroundColor: '#F36A0C',
                
            },
            headerTintColor: '#e3e3e3',
            headerTitleStyle: {
                color: 'white',
                fontSize:26,
                paddingBottom:5
            }
        }
    }

);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         packages: PACKAGES,
    //         jobs: JOBS,
    //         selectedPackage: null
    //     };
    // }

    //Handle package select for Directory ListItem
    // onPackageSelect(packageId){
    //     this.setState({selectedPackage: packageId});
    // }

    render() {
        return (
            <View style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                    }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;
