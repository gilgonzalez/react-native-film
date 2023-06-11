import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { View,  Dimensions, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';
import { MovieFlatList } from '../components/MovieFlatList';
import Loader from '../components/Loader';

const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, isLoading, popular, topRated,upcoming } = useMovies();

  if (isLoading) {
    return (
      <Loader size={100} color="red"/>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/**MAIN CAROUSEL */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: { item: Movie }) => <MovieCard movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        <MovieFlatList nowPlaying={upcoming} title="Proximamente"/>
        <MovieFlatList nowPlaying={popular} title="Más Populares"/>
        <MovieFlatList nowPlaying={topRated} title="Mejor Valoradas"/>
        </View>
    </ScrollView>
  );
};

export default HomeScreen;
