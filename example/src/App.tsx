import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BasicScreen from './screens/BasicScreen';
import ModalScreen from './screens/ModalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Basic" component={BasicScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
