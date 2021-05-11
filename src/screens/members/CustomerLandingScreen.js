import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button, ThemeProvider } from 'react-native-elements';


import Spacer from '../../components/Spacer'
import Logo from '../../components/LogoWhite'

export default function Landing({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
    <ThemeProvider theme={theme}>
        <Spacer>
          <Logo />
        </Spacer>
        <View>
          <Spacer>
            <Text h3>Customers please click on Create Card below to receive your QR Code and start earning rewards!</Text>
          </Spacer>
          <Spacer>
            <Button buttonStyle={[{ backgroundColor: "#F4B400" }]}
              style={styles.button}
              title="Create Card"
              onPress={() => navigation.navigate("CreateLoyaltyCard")} />
          </Spacer>
          <Spacer>
            <Spacer>
              <Text h3>Business Users Please Select Below</Text>
            </Spacer>
            <Button buttonStyle={[{ backgroundColor: "#4285F4" }]}
              style={styles.button}
              title="Scan Card"
              onPress={() => navigation.navigate("ScanCard")} />
          </Spacer>
          <Spacer>
            <Button buttonStyle={[{ backgroundColor: "#DB4437" }]}
              style={styles.button}
              title="Logout"
              onPress={() => onLogout()} />
          </Spacer>
        </View>
    </ThemeProvider>
      </View>
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
      color: "white",
    },
    h3Style: {
      fontSize: 15,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "375pt",
    backgroundColor: "#244464",
  },
});