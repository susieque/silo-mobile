import React, { Component } from 'react';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import { SafeAreaView } from 'react-native';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Home from './HomeComponent';
import PackageInfo from './PackageInfoComponent';
import PackageList from './PackageListComponent';
import Login from './LoginComponent';

//STACK NAVIGATORS
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        PackageList: { screen: PackageList },
    },
    {
        initialRouteName: 'Home',
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

const PackageInfoNavigator = createStackNavigator(
    {
        PackageList: { screen: PackageList },
        PackageInfo: { screen: PackageInfo }
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
);

const PackageListNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        PackageList: { screen: PackageList },
        PackageInfo: { screen: PackageInfo }
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

);

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#b84D05'
            },
            headerTintColor: '#e3e3e3',
            headerTitleStyle: {
                color: 'white',
                fontSize: 26,
                paddingBottom:5
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                color='white'
                //iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


//DRAWER NAVIGATOR
const MainNavigator = createDrawerNavigator(
    {
        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Home: { screen: HomeNavigator },
        PackageList: {screen: PackageListNavigator },
    },
    {
        initialRouteName: 'Login',
        drawerBackgroundColor: '#ffdec8'
    }
);

//CONTAINER
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
