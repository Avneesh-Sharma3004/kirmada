import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Loading = () => (

    <SafeAreaView style={[ styles.horizontal]}>
     
      <ActivityIndicator size="large" />
      
    </SafeAreaView>

);

const styles = StyleSheet.create({
 
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;