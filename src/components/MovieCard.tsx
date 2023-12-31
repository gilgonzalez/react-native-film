import React from 'react';
import { View,  Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  movie: Movie
  height?: number
  width? : number
}

const MovieCard = ({ movie, height = 440, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', { movie }) }
            activeOpacity={0.8}
            style={ {
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}
        >
            <View style={ styles.imageContainer }>
                <Image
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>

  );
};
//

export default MovieCard;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
},
  image: {
    flex: 1,
    borderRadius: 16,
  },
});
