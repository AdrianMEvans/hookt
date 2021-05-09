import React from 'react'
import { Text, View, Button } from 'react-native'


export default function CustomerLanding({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button 
            title="CreateCard"
            onPress = {() => navigation.navigate("CreateLoyaltyCard")}
            />
            <Button 
            title="ScanCard"
            onPress = {() => navigation.navigate("ScanCard")}
            />
        </View>
    )
}
