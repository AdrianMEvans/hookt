import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export default function Landing({ navigation }) {
  return (
    <View style={{ height: '100%', alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <Button 
          title="Register"
          onPress={() => navigation.navigate("Register")} />
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: '80%', 
    height: '35%', 
    backgroundColor: '#ccc',
    borderRadius: 20,
    shadowOffset: {width: 5,height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
});