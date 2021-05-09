import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';

import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import CreateLoyaltyCard from "./src/screens/CreateLoyaltyCard";
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBktqiOWC1IeP-IuFjnQR_2Hvw6BvrrAS4",
  authDomain: "hookt-app.firebaseapp.com",
  projectId: "hookt-app",
  storageBucket: "hookt-app.appspot.com",
  messagingSenderId: "785873493026",
  appId: "1:785873493026:web:957bdaca0eee302823be7b",
  measurementId: "G-45DYE0PX9F"
};

// if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
// }

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './src/screens/auth/Landing'
import RegisterScreen from './src/screens/auth/Register'
import LoginScreen from './src/screens/auth/Login'

const Stack = createStackNavigator();

export class App extends Component {

  constructor(props) {
    super()
    this.state = {
      loaded: false,
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          user: null,
          loaded: true,
        })
      } else {
        this.setState({
          user: user,
          loaded: true,
        })
      }
    })
  }
  render() {
    const onLogout = () => {
      firebase.auth().signOut();
    }
    const { user, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={styles.loading}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!user) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{ height: '100%', alignItems: "center", justifyContent: "center" }}>
        <CreateLoyaltyCard user={user}/>
        <Button
          title="Create Loylty Card2"
          onPress={() => onLogout()}
        />
        <Button
          title="Logout2"
          onPress={() => onLogout()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    height: 20,
    width: "80%",
    margin: 10,
    paddingLeft: 12,
  },
  textInput: {
    height: 60,
    width: "80%",
    paddingLeft: 10,
    borderRadius: 10,
    borderBottomColor: '#ccc',
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    fontSize: 14
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 20,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default App
