import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 45,
    },

    titleText:{
        fontFamily: 'lora-bold',
        fontSize: 18,
    }
})