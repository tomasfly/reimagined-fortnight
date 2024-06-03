import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import InvestingsScreen from './screens/InvestingsScreen';
import BotsScreen from './screens/BotsScreen';
import WalletScreen from './screens/WalletScreen';

// Tips de react native:
// gradle clean cache
// uninstall App
// Installed NDK version matching in android\build.gradle. Installed it by using Android Studio

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // show splash screen for 2 seconds
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Investings" component={InvestingsScreen} />
        <Tab.Screen name="Bots" component={BotsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
