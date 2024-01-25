import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '.screens/LoginScreen';
import LandingScreen from '.screens/LandingScreen';
import SignupScreen from '.screens/SignupScreen';
import RecoveryScreen from '.screens/RecoveryScreen';
import useAuth from '../hooks/useAuth';
import MainContainer from './MainContainer'

export default function App() {
  const Stack = createNativeStackNavigator();
  const { user } = useAuth;

  if (user) {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen options={{ headerShown: false }} name='Home' component={MainContainer} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen options={{ headerShown: false }} name='Landing' component={LandingScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Signup' component={SignupScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Recovery' component={RecoveryScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Clique' component={CliqueExperiment} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
