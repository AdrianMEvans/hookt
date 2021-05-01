import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


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