import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './Screens/RegisterScreen';

const Stack = createNativeStackNavigator();   // we had given all features of stack navigation to a variable 


//global css that we declared that can be use in the header
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C9BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>

        {/** we added a screen in the stack navigation that we have imported  */}
        <Stack.Screen styles={{ alignItems: "center" }} name="Login" component={LoginScreen} />
        <Stack.Screen styles={{ alignItems: "center" }} name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//this is the css that we we apply in the screen of the application that we will call
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
