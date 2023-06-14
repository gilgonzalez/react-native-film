import Carousel from 'react-native-snap-carousel';
import React, { useContext, useEffect } from 'react';
import { View,  Dimensions, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';
import { MovieFlatList } from '../components/MovieFlatList';
import Loader from '../components/Loader';
import { GradientBackground } from '../components/GradientBackground';
import { getColorsFromImage } from '../helpers/getColorsFromImage';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');
const BUILD_URI = 'https://image.tmdb.org/t/p/w500';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, isLoading, popular, topRated, upcoming } = useMovies();
  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const { primary,secondary,quaternary,tertiary} = await getColorsFromImage(BUILD_URI + nowPlaying[index].poster_path);
    setMainColors({ primary, secondary, quaternary, tertiary });
  };
  useEffect(() => {
    if (nowPlaying.length > 0 ) {
      getPosterColors(0);
    }
  },[nowPlaying]);


  if (isLoading) {
    return (
      <Loader size={100} color="red"/>
    );
  }

  return (
    <GradientBackground>
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/**MAIN CAROUSEL */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: { item: Movie }) => <MovieCard movie={item} />}
            sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
          />
        </View>
        <MovieFlatList nowPlaying={upcoming} title="Proximamente"/>
        <MovieFlatList nowPlaying={popular} title="Más Populares"/>
        <MovieFlatList nowPlaying={topRated} title="Mejor Valoradas"/>
        </View>
    </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
