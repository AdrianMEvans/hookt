import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button, ThemeProvider } from 'react-native-elements';

import Spacer from '../../components/Spacer'
import Logo from '../../components/Logo'

import firebase from 'firebase'

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <View style={styles.container}>
                    <View>
                        <Logo />
                        <Spacer>
                            <Text h4>Signup for an Account</Text>
                        </Spacer>
                        <Spacer>
                            <Input
                                placeholder="name"
                                onChangeText={(name) => this.setState({ name })}
                            />
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
                            <Button buttonStyle={[{ backgroundColor: "#248C9C" }]}
                                onPress={() => this.onSignUp()}
                                title="Signup"
                            />
                        </Spacer>
                    </View>
                </View>
            </ThemeProvider>
        )
    }
}

const theme = {
    Button: {
        raised: true,
    },
    Text: {
        style: {
          fontSize: 15,
          color: "#244464",
        },
        h1Style: {
          color: "#244464",
          fontSize: 30,
        },
        h2Style: {
          color: "#244464",
          fontSize: 25,
        },
        h3Style: {
          fontSize: 20,
        },
      },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "375",
        backgroundColor: "#F2F2EA",
      },
});

export default Signup