import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// imported screens
import HomeScreen from './Home';
import LoginScreen from './login';
import SignUpScreen from './SignUp';
import FavouriteScreen from './Favorites';
import CategoryScreen from './Category';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Favorites" component={FavouriteScreen}/>
        <Stack.Screen name="Category" component={CategoryScreen}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );

}





