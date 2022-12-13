import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home( {navigation} ){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button
                title='Review Details'
                onPress={() => navigation.navigate("Review Details")}
            />
        </View>
    )
}