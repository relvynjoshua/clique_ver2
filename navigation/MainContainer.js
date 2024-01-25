import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './screens/HomeScreen';
import Add from './screens/EntriesScreen';
import Settings from './screens/SettingsScreen';
import Message from './screens/MessageScreen';
import Calendar from './screens/SchedulerScreen';
// Screen names
const homeName = "Home";
const detailsName = "Clique In";
const settingsName = "Settings";
const MessageName = "Message";
const CalendarName = "Calendar";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === detailsName) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'person' : 'person-outline';
          } else if (rn === MessageName) {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          } else if (rn === CalendarName) {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } 

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      ScreenOptions={{
        activeTintColor: '#164863',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 }
      }}>

      <Tab.Screen options={{ headerShown: false }}  name={homeName} component={Home} />
      <Tab.Screen options={{ headerShown: false }}  name={MessageName} component={Message} />
      <Tab.Screen options={{ headerShown: false }}  name={CalendarName} component={Calendar} />
      <Tab.Screen options={{ headerShown: false }}  name={detailsName} component={Add} />
      <Tab.Screen options={{ headerShown: false }}  name={settingsName} component={Settings} />

    </Tab.Navigator>
  );
}

export default MainContainer;
