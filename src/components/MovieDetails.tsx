import React from 'react';
import { Text, FlatList } from 'react-native';
import { View } from 'react-native';
import { Cast, MovieFullInfo } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import CardActor from './CardActor';

interface Props {
  movieDetails: MovieFullInfo,
  cast : Cast[]
}

const MovieDetails = ({ movieDetails, cast }: Props) => {
  return (
    <>
      {/**DETALLES */}
      <View style={{ marginHorizontal: 20}} >
        <Text>{movieDetails.genres.map(el => el.name).join(', ')}</Text>
        <Text style={{ fontSize: 20, marginTop: 5, fontWeight: 'bold' }}>Sinopsis</Text>
        <Text style={{ fontSize: 16 }}>{movieDetails.overview}</Text>
        <Text style={{ fontSize: 20, marginTop: 5, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text>
          { currencyFormatter.format(movieDetails.budget, { code: 'USD' })}
        </Text>
      </View>
      {/**CASTING */}
      <View style={{ marginTop: 10,  marginBottom: 100  }}>
      <Text style={{ fontSize: 20, marginTop: 5, fontWeight: 'bold',marginHorizontal: 20 }}>
          Casting
        </Text>
        <FlatList
          style={{ marginTop: 10 }}
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardActor actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default MovieDetails;
