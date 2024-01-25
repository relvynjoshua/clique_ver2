import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import color from "../Clique11/assets/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import LoginScreen from './navigation/screens/LoginScreen';
import LandingScreen from './navigation/screens/LandingScreen';
import SignupScreen from './navigation/screens/SignupScreen';
import HomeScreen from './navigation/screens/HomeScreen';
import RecoveryScreen from './navigation/screens/RecoveryScreen';
import useAuth from './hooks/useAuth';
import CliqueExperiment from './navigation/screens/CliqueExperiment';
import MainContainer from './navigation/MainContainer'
import ChatScreen from './navigation/screens/ChatScreen';
import MessagesScreen from './navigation/screens/MessageScreen';
import Chat1Screen from './navigation/screens/chat_screens/Chat1Screen';
import Chat2Screen from './navigation/screens/chat_screens/Chat2Screen';
import Chat3Screen from './navigation/screens/chat_screens/Chat3Screen';
import Chat4Screen from './navigation/screens/chat_screens/Chat4Screen';
import Scheduler from './navigation/screens/SchedulerScreen';

const {height, width} = Dimensions.get('window');

export default function App() {
  const Stack = createNativeStackNavigator();
  const { user } = useAuth;

  if (user) {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MainContainer'>
            <Stack.Screen options={{ headerShown: false }} name='MainContainer' component={MainContainer} />
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
            <Stack.Screen options={{ headerShown: false }} name='MainContainer' component={MainContainer} />
            <Stack.Screen options={{ headerShown: false }} name='Message' component={MessagesScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Calendar' component={Scheduler} />
            <Stack.Screen name='General Chat' component={ChatScreen} />
            <Stack.Screen name='SE Chat' component={Chat1Screen} />
            <Stack.Screen name='IOT Chat' component={Chat2Screen} />
            <Stack.Screen name='MobProg Chat' component={Chat3Screen} />
            <Stack.Screen name='Database 2 Chat' component={Chat4Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: hp(96),
    backgroundColor: color.white,
  }
});
