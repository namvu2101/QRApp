import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Splash from './screens/Splash';
import FacultyDetails from './screens/FacultyDetails';
import ClassDetails from './screens/ClassDetails';
import AttendanceReport from './screens/AttendanceReport';
import TodayClasses from './screens/TodayClasses';
import Setting from './screens/Setting';
import Class from './screens/Classes';

const Tab = createNativeStackNavigator();
export default function Stack() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Splash" component={Splash} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="FacultyDetails" component={FacultyDetails} />
        <Tab.Screen name="ClassDetails" component={ClassDetails} />
        <Tab.Screen name="AttendanceReport" component={AttendanceReport} />
        <Tab.Screen name="TodayClasses" component={TodayClasses} />
        <Tab.Screen name="Settings" component={Setting} />
        <Tab.Screen name="Class" component={Class} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
