import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }){

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ route.params.paramKey }</Text>
        </View>
    )
}

