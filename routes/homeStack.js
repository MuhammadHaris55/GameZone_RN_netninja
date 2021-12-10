import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewdetails";
import Header from '../screens/shared/header';

// NET NINJA TUTORIAL WAY -------------------------------------
// const screens = {
//     Home: {
//         screen: Home
//     },
//     ReviewDetail: {
//         screen: ReviewDetails
//     },
// }
// const HomeStack = createStackNavigator(screens);
// export default createAppContainer(HomeStack);

//LATEST WAY TO DO NAVIGATION -------------------------------------------
const Stack = createNativeStackNavigator();
function HomeStack() {
    return (
        // <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
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
                    name="Home"
                    component={Home}
                    options={ ({ navigation }) => {
                        return {
                            headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                        }
                    }}
                    // options={{
                    //     title: 'GameZone',
                    //     // headerStyle: {
                    //     //   backgroundColor: '#eee',
                    //     // },
                    //     // headerTintColor: '#444',
                    //     // headerTitleStyle: {
                    //     //   fontWeight: 'bold',
                    //     // },
                    //   }}
                />
                <Stack.Screen
                    name="ReviewDetails"
                    component={ReviewDetails}
                    options={{
                        title: 'Review Details',
                    }}
                />
            </Stack.Navigator>
        // </NavigationContainer>
    );
  }
  export default HomeStack;
