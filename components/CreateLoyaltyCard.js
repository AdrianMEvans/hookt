import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'


export default function CreateLoyaltyCard(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const createUser = () => {
    const input = {
      name: name,
      email: email,
      businessId: props.user.uid
    }
    fetch('http://localhost:3001/api/createLoyaltyCard',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(res => res.json())
      .then(result => setData(result.rows))
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(err => console.log("error"))
  }

  return <View style={styles.container}>
    <Text style={styles.label}>Luca</Text>
    <TextInput style={styles.textInput}
      defaultValue="Type your name here"
      onChange={(e) => { setName(e.target.value) }}
    />
    <Text style={styles.label}>E-mail</Text>
    <TextInput style={styles.textInput}
      defaultValue="Type your E-mail here"
      onChange={(e) => { setEmail(e.target.value) }}
    />
    <Button
      title="Create Loylty Card"
      onPress={() => createUser()}
    />
  </View>
}

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
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 20,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});