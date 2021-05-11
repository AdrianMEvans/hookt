import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button, ThemeProvider } from 'react-native-elements';

import Spacer from '../../components/Spacer'
import Logo from '../../components/LogoWhite'

export default function CreateLoyaltyCard(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const createUser = () => {
    const input = {
      name: name,
      email: email,
      businessId: props.user.uid
    }
    fetch('http://localhost:3001/api/createLoyaltyCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(res => res.json())
      .then(result => {
        setData(result.rows);
        navigation.navigate("CustomerLandingScreen")
      })
      // .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(err => console.log("error"))
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <View>
          <Spacer>
            <Logo />
          </Spacer>
          <Spacer>
            <Text h3>Enter your details to receive your QR Code</Text>
          </Spacer>
          <Spacer>
            <Input
              placeholder='Enter your e-mail here'
              onChange={(e) => { setEmail(e.target.value) }}
              autoCapitalize='none'
              autoCorrect={false}
            />
          </Spacer>
          <Spacer>
            <Input
              placeholder='Enter your name here'
              secureTextEntry={true}
              onChange={(e) => { setName(e.target.value) }}
              autoCorrect={false}
            />
          </Spacer>
          <Spacer>
            <Button buttonStyle={[{ backgroundColor: "#F4B400" }]}
              onPress={() => createUser()}
              title="Create Loylty Card"
            />
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
  label: {
    height: 20,
    width: "80%",
    margin: 10,
    paddingLeft: 12,
  },
  textInput: {
    height: 60,
    width: "80%",
    paddingLeft: 10,
    borderRadius: 10,
    borderBottomColor: '#ccc',
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    fontSize: 14
  },
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "375pt",
    backgroundColor: "#244464",
  },
});