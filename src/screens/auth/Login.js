import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../components/Spacer'


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
            <View>
                <Spacer>
                <Text h4>Login to your Account</Text>
                </Spacer>
                <Spacer>
                    <Input
                        placeholder="email"
                        onChangeText={(email) => this.setState({ email })}
                    />
                </Spacer>
                <Spacer>
                    <Input
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </Spacer>
                <Spacer>
                    <Button
                        onPress={() => this.onSignUp()}
                        title="Login"
                    />
                </Spacer>
            </View>
        )
    }
}

export default Login