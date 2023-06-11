import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View,  Text, Image, StyleSheet, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import RatingElement from '../components/RatingElement';
import { useMovieDetails } from '../hooks/useMovieDetails';
import Loader from '../components/Loader';
import { colors } from '../theme/colors';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

const DetailScreen = ({navigation,  route }: Props) => {

  const movie = route.params.movie;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const { cast, isLoading, movieFull } = useMovieDetails(movie.id);




  return (
    <ScrollView>
    <View style={styles.imageContainer }>
      <Image
        source={{ uri }}
        style={ styles.posterImage}
        />
      </View>
      <View style={ styles.textContainer}>
        <Text style={styles.subtitle}>{ movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={ styles.textContainer}>
        <RatingElement color={colors.secondary} rate={movie.vote_average}/>
      </View>
      <View style={{marginTop:20}}>
        {isLoading ? <Loader size={40} color={colors.secondary} /> : <MovieDetails movieDetails={ movieFull!} cast={cast} />}
      </View>
      <Icon color="white" name="arrow-back-outline" size={35} onPress={()=>navigation.goBack()} style={{position:'absolute', top:10, left:10, zIndex:1}}/>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 0.7 * screenHeight,
    overflow:'hidden',
    shadowColor: '#000',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
  posterImage: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    color:'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
