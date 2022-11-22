import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);
  
  

  return (
    <View style={styles.container}>
      

      {/* <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler} color='#fff'/>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // buttonContainer: {
  //   backgroundColor: '#54E1F2',
  //   borderRadius: 5,
  //   marginTop: 20,
  // }
});
