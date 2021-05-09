import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Button } from 'react-native-elements';

import Spacer from '../../components/Spacer'


export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Spacer>
        <Button 
          style={styles.button}
          title="Create Card"
          onPress={() => navigation.navigate("CreateLoyaltyCard")} />
          </Spacer>
          <Spacer>
        <Button 
          style={styles.button}
          title="Scan Card"
          onPress={() => navigation.navigate("ScanCard")} />
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