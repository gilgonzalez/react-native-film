import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const GradientState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <GradientProvider>
      { children}
    </GradientProvider>
  );

};

const App = () => {
  return (
    <NavigationContainer>
      <GradientState>
        <Navigation />
      </GradientState>
      {/* <FadeScreen/> */}
    </NavigationContainer>
  );
};

export default App;
