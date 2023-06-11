import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

const Loader = ({size = 25, color = colors.primary} : {size? : number, color?: string}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator color={color} size={ size}/>
  </View>
  );
};

export default Loader;
