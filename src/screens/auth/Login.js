import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button, ThemeProvider } from 'react-native-elements';

import Spacer from '../../components/Spacer'
import Logo from '../../components/Logo'

import firebase from 'firebase'

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Logo />
                <Spacer>
                <Text h4>Login to your Account</Text>
                </Spacer>
                <Spacer>
                    <Input
                        placeholder="email"
                        onChangeText={(email) => this.setState({ email })}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </Spacer>
                <Spacer>
                    <Input
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </Spacer>
                <Spacer>
                    <ThemeProvider theme={theme}>
                    <Button
                        onPress={() => this.onSignUp()}
                        title="Login"
                    />
                    </ThemeProvider>
                </Spacer>
                </View>
            </View>
        )
    }
}

const theme = {
    Button: {
      raised: true,
    },
  };

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      flex:1,
      height: '60%',
    //   justifyContent: 'center',
    //   marginBottom: 350
    },
  });

export default Login