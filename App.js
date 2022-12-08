import React, {useState} from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from './screens/home';

const getFonts = () => Font.loadAsync({
    'lora-regluar': require('./assets/fonts/Lora-Regular.ttf'),
    'lora-bold': require('./assets/fonts/Lora-Bold.ttf')
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded){
    return (
      <Home/>
     );
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log("Huston, we have a problem.")}
      ></AppLoading>
    )
  }
  
}

