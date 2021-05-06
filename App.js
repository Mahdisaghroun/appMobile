

import React from 'react';
import AdminLogin from './HomeScreens/AdminLogin';
import Home from './HomeScreens/Home';
import Questions from './HomeScreens/Questions';
import ScanScreen from './HomeScreens/ScanScreen';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Splash from './SplashScreens/Splash';
import Critere from './HomeScreens/Critere';

const Stack = createStackNavigator();


function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureDirection: 'horizontal',
        cardStyle: {
          backgroundColor: 'transparent'
        }

      }
      }
        initialRouteName="Critere"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="Critere" component={Critere} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};



export default App;
