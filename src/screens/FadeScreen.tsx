import React from 'react';
import { Animated, Button, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

  const { opacity, fadeIn, fadeOut } = useFade();


  return (
    <View style={{flex: 1, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
      <Animated.View style={{ opacity: opacity, backgroundColor: 'white', width: 150, height: 150, borderWidth: 10, borderColor: 'black', borderRadius: 10 }} />
      <Button title="Fade In"onPress={fadeIn}/>
      <Button title="Fade Out"onPress={fadeOut}/>
    </View>
  );
};
