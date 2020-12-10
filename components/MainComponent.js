import React, { Component } from 'react';
import { PACKAGES } from '../shared/packages';
import { JOBS } from '../shared/jobs';
import SafeAreaView from 'react-native-safe-area-view';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Home from './HomeComponent';
import PackageInfo from './PackageInfoComponent';
import PackageList from './PackageListComponent';
import Login from './LoginComponent';

//STACK NAVIGATORS
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',

        defaultNavigationOptions:({navigation}) => ({
            headerStyle: {
                backgroundColor: '#b84D05',
                // backgroundColor: '#F36A0C',
                
            },
            headerTintColor: '#e3e3e3',
            headerTitleStyle: {
                color: 'white',
                fontSize:26,
                paddingBottom:5
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }

);

const PackageListNavigator = createStackNavigator(
    {
        // Home: { screen: Home },
        PackageList: { 
            screen: PackageList,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
                />
            }) 
         },
         
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
            },
            
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
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

//CUSTOM DRAWER COMPONENT
const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('./images/logo-transparent-logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Silo Mobile</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
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
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } 
        
        },
        PackageList: {
            screen: PackageListNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='bars'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            } 
        },
    },
    {
        initialRouteName: 'Login',
        drawerBackgroundColor: '#ffdec8',
        contentComponent: CustomDrawerContentComponent
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

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 20,
        color: '#fff',
        fontSize: 24
    },
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#ffc59d',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#222222',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    }
});

export default Main;
