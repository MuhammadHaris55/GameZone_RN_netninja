import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewdetails';

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="HomeStack" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

