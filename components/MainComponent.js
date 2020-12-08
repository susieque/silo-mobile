import React, { Component } from 'react';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import { SafeAreaView } from 'react-native';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Directory from './DirectoryComponent';
import PackageInfo from './PackageInfoComponent';
import PackageList from './PackageListComponent';
import Home from './HomeComponent';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        PackageList: { screen: PackageList },
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

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}
    },
    {
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
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#ffdec8'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
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
