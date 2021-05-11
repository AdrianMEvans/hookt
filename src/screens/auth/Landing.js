import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Button } from 'react-native-elements';

import Spacer from '../../components/Spacer'
import Logo from '../../components/Logo'



export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Spacer>
      <Logo />
      </Spacer>
      <Text h4>
        Welcome
      </Text>
     
      <Spacer>
        <Text h5>
          If you are a first time user please go to the signup. {`\n`}
        If you are an existing user please Login below.
      </Text>
      </Spacer>
      <View style={styles.buttonContainer}>
        <Spacer>
          <Button
            style={styles.button}
            title="Signup"
            onPress={() => navigation.navigate("Signup")} />
        </Spacer>
        <Spacer>
          <Button
            style={styles.button}
            title="Login"
            onPress={() => navigation.navigate("Login")} />
        </Spacer>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});