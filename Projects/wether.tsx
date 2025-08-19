import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const[showMore,setShowMore] = useState(false)

  const getWeather = async (cityName: string) => {
    if (!cityName) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=736f9f7ad30f4eff9a080757250907&q=${cityName}&aqi=no`
      );
      const json = await response.json();
      setWeather(json);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Get Weather" onPress={() => getWeather(city)} />

        {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}

        {!loading && weather && weather.current && (
          <View style={styles.weatherBox}>
            <Text style={styles.title}>{weather.location.name}</Text>
            <Text style={styles.temp}>{weather.current.temp_c}°C</Text>
            <Text style={styles.desc}>{weather.current.condition.text}</Text>

            <Button title={showMore ? 'Hide Info' : 'More Info'}
            onPress={() => setShowMore(!showMore)}/>

            {showMore && (
              <View style={styles.moreInfo}>
                <Text>Humidity: {weather.current.humidity}%</Text>
                <Text>Wind: {weather.current.wind_kph} kph</Text>
                <Text>Feels Like: {weather.current.feelslike_c}°C</Text>
                <Text>UV Index: {weather.current.uv}</Text>
              </View>
            )}
          </View>
        )}

        {!loading && weather && !weather.current && (
          <Text style={styles.error}>Weather data not available.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  container: {
    backgroundColor:"#9f9f9f",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius:10,
    elevation:10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
   
  },
  weatherBox: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 24,
    marginVertical: 10,
  },
  desc: {
fontSize: 18,
    color: 'gray',
  },
  error: {
    marginTop: 20,
    color: 'red',
  },
  moreInfo: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
});
