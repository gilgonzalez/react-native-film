import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  Home: undefined;
  DetailScreen: {movie :Movie};
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor : 'white',
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{ cardStyle: {backgroundColor : '#f2f2f2'} }} component={DetailScreen} />
    </Stack.Navigator>
  );
};
