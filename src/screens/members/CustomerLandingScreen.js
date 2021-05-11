import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, ThemeProvider } from 'react-native-elements';


import Spacer from '../../components/Spacer'
import Logo from '../../components/Logo'

export default function Landing({ navigation, onLogout }) {
  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
      <Spacer>
          <Text>Customers please click on Create Card below</Text>
        </Spacer>
        <Spacer>
        <Button buttonStyle={[{ backgroundColor: "#DCB05A" }]}
          style={styles.button}
          title="Create Card"
          onPress={() => navigation.navigate("CreateLoyaltyCard")} />
          </Spacer>
          <Spacer>
          <Spacer>
          <Text>Business Users Please Select Below</Text>
        </Spacer>
        <Button 
          style={styles.button}
          title="Scan Card"
          onPress={() => navigation.navigate("ScanCard")} />
          </Spacer>
          <Spacer>
        <Button 
          style={styles.button}
          title="Logout"
          onPress={() => onLogout()} />
          </Spacer>
          </View>
      </View>
      </ThemeProvider>
  )
}

const theme = {
  Text: {
    style: {
      fontSize: 20,
      color: "white",
    },
    h4Style: {
      color: "white",
    },
    h2Style: {
      color: "blue",
    },
    h3Style: {
      fontSize: 15,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    backgroundColor: "#244464",
  },
  buttonContainer: {
    // flexDirection: 'row',
  },
});