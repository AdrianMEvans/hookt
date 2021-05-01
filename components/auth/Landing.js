import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={styles.landing}>
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")} />
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")} />
        </View>
    )
}

const styles = StyleSheet.create({
    landing: {
      flex: 1,
    //   alignItems: "center",
      justifyContent: "center",
    },
  });