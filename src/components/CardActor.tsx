import React from 'react';
import { Cast } from '../interfaces/movieInterface';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  actor : Cast
}

const CardActor = ({ actor }: Props) => {
  const uri = actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
  //'https://placehold.co/50' `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={{height:65, width:65, borderRadius: 10 }} />
      <View style={styles.actorInfo}>
        <Text style={{color:'white',fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{color:'white',fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CardActor;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginRight: 10,
    paddingRight: 10,
  },
  actorInfo: {
    marginLeft: 10,
  },
});
