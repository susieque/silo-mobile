import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, CheckBox, Avatar, Divider, Card, Button } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
        };
    }

    // static navigationOptions = {
    //     title: 'Login'
    // }

    handleLogin() {

        const { navigate } = this.props.navigation;

        console.log(JSON.stringify(this.state));
        if (this.state.remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            ).catch(error => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch(
                error => console.log('Could not delete user info', error)
            );
        }

        navigate('Home');


    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
            .then(userdata => {
                const userinfo = JSON.parse(userdata);
                if (userinfo) {
                    this.setState({username: userinfo.username});
                    this.setState({password: userinfo.password});
                    this.setState({remember: true})
                }
            });
    }

    render() {

        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                {/* <Text style={{fontSize:32, textAlign:'center', marginBottom:20, color: '#b84d05', fontWeight: 'bold'}}>Silo</Text> */}
                <View 
                    style={{alignItems: 'center',flexDirection:"column", backgroundColor: '#ffc59d', paddingBottom:25}}
                    linearGradientProps={{
                        colors: ['#ffa262', '#eca06c'],
                        start: { x: 1, y: 0 },
                        end: { x: 0.2, y: 0 },
                    }}>
                    <Avatar 
                        rounded 
                        size='xlarge' 
                        marginTop={0}
                        marginBottom={10} 
                        source={require('./images/orange-avatar-white-bg.png')}/>
                </View>
                {/* <Divider style={{backgroundColor:'#eca06c', height:5}} /> */}
                <Card 
                    containerStyle={styles.cardContainer}>
                    <Input
                        placeholder='Username'
                        label='User Name'
                        labelStyle={styles.inputLabel}
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        onChangeText={username => this.setState({username})}
                        value={this.state.username}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                        />
                    <Input
                        placeholder='Password'
                        label='Password'
                        labelStyle={styles.inputLabel}
                        leftIcon={{type: 'font-awesome', name: 'key'}}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        containerStyle={styles.formInput}
                        leftIconContainerStyle={styles.formIcon}
                    />
                    <CheckBox
                        title='Remember Me'
                        center
                        checked={this.state.remember}
                        onPress={() => this.setState({remember: !this.state.remember})}
                        containerStyle={styles.formCheckbox}
                    />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleLogin()}
                            title='Login'
                            type='clear'
                            titleStyle={styles.buttonTitle}
                            containerStyle={styles.buttonContainer}
                            fontSize={30}
                        />
                    </View>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex:1,
        margin: 0,
        backgroundColor: '#ffc59d'
    },
    formIcon: {
        marginRight: 10,
        color:'#b84d05'
    },
    formInput: {
        padding: 10,
        backgroundColor: 'white',
    },
    formCheckbox: {
        margin: 0,
        padding:0,
        backgroundColor: 'white',
        borderColor:'white'
    },
    buttonTitle: {
        color: 'white',
        fontSize:20,
        fontWeight: 'bold'
        
    },
    buttonContainer: {
        marginTop: 15,
        color: 'white',
        backgroundColor: '#b84d05',
        borderColor: 'white',
        borderRadius: 10,
        textAlignVertical:'center'
        
    },
    inputLabel: {
        fontSize: 14,
        color: '#b84D05'
        
    },
    cardContainer: {
        borderRadius:10,
        margin:30,
        backgroundColor: 'white'
    }
});

export default Login;