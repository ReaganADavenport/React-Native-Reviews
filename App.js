import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Shaun');
  const [person, setPerson] = useState({ name: "Mario", age: 40});
  
  const clickHandler = () => {
    setName('Chun-Li');
    setPerson({ name: 'Luigi', age: 45});
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and he is {person.age} years old</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler} color='#fff'/>
      </View>
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

  buttonContainer: {
    backgroundColor: '#54E1F2',
    borderRadius: 5,
    marginTop: 20,
  }
});
