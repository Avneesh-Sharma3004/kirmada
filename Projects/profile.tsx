
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = () => {
  const user = {
    name: 'Dummy Sharma',
    id: 'USR12345',
    email:'avneeshsharma275201@gmail.com',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQMEAgf/xAAnEAEBAAEDAgYCAwEAAAAAAAAAAQIDETEhUQQSQWFxgSIzMlKhI//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APqYDq5gACDznnMJvkD0zy1cMecuvs59TVyzvadnhcR0XxGHak8Rj/XJzouGuqa2F9dvlpvvN5d3CuOVxu8uyYa7Bnpasy6X+TRFKgAVAoEABsAACAOPWzued7Th1at208r7OJYlAFEoAgABLZd50deGXmxmX+ORt4e8435SrGwIigVAUQBuAAgAy8T+v7crp8T+v7czUSiKlEAAASgNNC/9Ppm00P2fQOlAZaQC0CBAG6AAioDLxFnk271zNfE389vZi1EoAIAAIADTQv59ezMl26wHYgMtFRagEVJwA3BKAADn8TPyl79GDtzxmU2vDk1cPJltvusR5AVBKqAAALjPNZEdGGnMOvqVWiCMqAlBZwIA6EAAEAY+Jx3ky7NnnKTKWXig4xc8bhdqjSIAIACvWljvnO0dLxpY+XG9693hKqUBBAAAAbgAIACADPV0/PN5y5bz1d1cWV3yt91iVAFQa6WnvfNZ09GTo0f1wV7TdUZUBAASgAA6AQALZPWT5Y568nTGb+9Bruzy1sJ67/Dnyyyy5ryuJrbLXuUsk2ndiCgAIPWGdw44eQG01peZY9yyzedXMm9nFTF11UY46u3TJpjlMuKirQSgoAOhlqasw972eNXW5mF+awWI9Z55Zc3d5BQQoIAAAAAlAABCdOAFa4anpk056xzPWGdx+OyYa3EmUs5RGmYDTAACAAAAAAIACAAAAAAAK//Z', 
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.avatar} />
      <View style={styles.info}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.userId}>ID: {user.id}</Text>
      <Text style={styles.userId}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 20,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50, 
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userId: {
    fontSize: 10,
    color: '#777',
    marginTop: 10,
  },
  info:{
    flex:1,
    flexDirection:"column",
    
  }
});

export default UserProfile;
