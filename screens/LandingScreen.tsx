import React from 'react';
import {Button, View, Text} from 'react-native';

interface LandingScreenProps {
  navigation: any;
}

const LandingScreen: React.FC<LandingScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to the Landing Screen!</Text>
      <Button title="Next" onPress={() => navigation.navigate('NextScreen')} />
    </View>
  );
};

export default LandingScreen;
