import React from 'react'
import { Text, View, Button, StyleSheet } from "react-native";

export default function Landing({ navigation }) {
    return (
        <View styles={styles.landingPage}>
            <Button 
            title="Register"
            onPress={() => navigation.navigate("Register")}/>
             <Button 
            title="Login"
            onPress={() => navigation.navigate("Login")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    landingPage: {
      flex: 1,
      justifyContent: 'center',
    },
  });