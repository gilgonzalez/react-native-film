import React from 'react';

import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

export const MovieFlatList = ({ nowPlaying, title }: { nowPlaying: Movie[], title?: string }) => {
  return (
    <View style={{ height: title ? 250 : 220, backgroundColor:'transparent'}} >
      {title &&
        <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', marginLeft: 20 }}>{title}</Text>
      }
      <FlatList
        data={nowPlaying!}
        renderItem={({ item }: { item: Movie }) => (
          <MovieCard movie={item} height={200} width={140} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>

  );
};
