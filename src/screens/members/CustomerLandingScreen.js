import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements';


import Spacer from '../../components/Spacer'
import Logo from '../../components/Logo'

export default function Landing({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
      <Spacer>
          <Text h5>Customers please click on Create Card below</Text>
        </Spacer>
        <Spacer>
        <Button 
          style={styles.button}
          title="Create Card"
          onPress={() => navigation.navigate("CreateLoyaltyCard")} />
          </Spacer>
          <Spacer>
          <Spacer>
          <Text h5>Business Users Please Select Below</Text>
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
    // flexDirection: 'row',
  },
  button: {
    
  },
});