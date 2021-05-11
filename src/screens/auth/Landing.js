import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Button, ThemeProvider } from 'react-native-elements';

import Spacer from '../../components/Spacer'
import Logo from '../../components/Logo'



export default function Landing({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Spacer>
          <Logo />
        </Spacer>
        <Text h4>
          Welcome
      </Text>
        <Spacer>
          <Text>
            If you are a first time user please Signup.
      </Text>
        </Spacer>
        <View>
          <Spacer>
              <Button buttonStyle={[{ backgroundColor: "#248C9C" }]}
                style={styles.button}
                title="Signup"
                onPress={() => navigation.navigate("Signup")} />
          </Spacer>
          <Spacer>
          <Text>
        If you are an existing user please Login below.
      </Text>
        </Spacer>
          <Spacer>
            <Button buttonStyle={[{ backgroundColor: "#248C9C" }]}
              style={styles.button}
              title="Login"
              onPress={() => navigation.navigate("Login")} />
          </Spacer>
        </View>
      </View>
    </ThemeProvider>
  )
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
      width: '375px',
      backgroundColor: "#F2F2EA",
  },
});