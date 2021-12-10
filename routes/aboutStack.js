import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '../screens/about';
import Header from '../screens/shared/header';

//LATEST WAY TO DO NAVIGATION -------------------------------------------
const Stack = createNativeStackNavigator();
function AboutStack() {
    return (
        // <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="About"
                screenOptions={{
                    headerStyle: {
                      backgroundColor: '#eee',
                    },
                    headerTintColor: '#444',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
            >
                <Stack.Screen
                    name="About"
                    component={About}
                    options={ ({ navigation }) => {
                      return {
                          headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
                      }
                    }}
                    // options={{
                    //     title: 'About GameZone',
                    //   }}
                />
            </Stack.Navigator>
        // </NavigationContainer>
    );
  }
  export default AboutStack;
