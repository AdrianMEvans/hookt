import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements';

import Spacer from '../../components/Spacer'

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  button: {
  },
});