import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native'

import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBktqiOWC1IeP-IuFjnQR_2Hvw6BvrrAS4",
  authDomain: "hookt-app.firebaseapp.com",
  projectId: "hookt-app",
  storageBucket: "hookt-app.appspot.com",
  messagingSenderId: "785873493026",
  appId: "1:785873493026:web:957bdaca0eee302823be7b",
  measurementId: "G-45DYE0PX9F"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'

const Stack = createStackNavigator();

export class App extends Component {

  
  constructor(props) {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const onLogout = () => {
      firebase.auth().signOut();
  }
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={styles.loading}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
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
      <View style={styles.loading}>
          <Text>User Logged In!!!</Text>
          <Button 
          title="Logout"
          onPress={() => onLogout()}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
  //   alignItems: "center",
    justifyContent: "center",
  },
});

export default App
