import React from 'react';
import { View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

/**
 *
 * @param rate a number between 0 and 10 to draw the stars
 * @returns
 */

const RatingElement = ({ rate, color = colors.primary }: {rate : number, color? : string}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          {
            Array(5).fill(0).map((_,i) => {
              if ( i + 1 <= Math.floor(rate / 2) ) {
                return <Icon key={i} name="star" size={20} color={color} />;
              }
            }
            )
          }
          {
            rate % 2 !== 0 && <Icon name="star-half" size={20} color={color} />
          }
          {
            Math.floor(rate / 2) < 4 && <Icon name="star-outline" size={20} color={color} />
          }

        </View>
  );
};

export default RatingElement;
