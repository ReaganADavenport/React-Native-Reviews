import React, {useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';
import ReviewDetails from './screens/reviewDetails';

const Stack = createNativeStackNavigator();

const getFonts = () => Font.loadAsync({
    'lora-regluar': require('./assets/fonts/Lora-Regular.ttf'),
    'lora-bold': require('./assets/fonts/Lora-Bold.ttf')
  });


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "GameZone",
              headerStyle: { backgroundColor:'#000'},
              headerTitleStyle: { color: '#fff'}
            }}
          />
          <Stack.Screen
            name="Review Details"
            component={ReviewDetails}
            options={{
              headerStyle: { backgroundColor:'#eee' },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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

