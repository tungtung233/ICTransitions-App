import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { events } from '../../constants/dummy';
import EventsList from './EventsList';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Inter_400Regular,
//   Inter_500Medium,
// } from '@expo-google-fonts/inter';

const EventsPage = () => {
  // let [fontsLoaded] = useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  // });
  return (
    <View style={styles.container}>
      <View style={{ padding: 15 }} />
      <View>
        <Text style={styles.titleText}>Workshops &amp; Events</Text>
      </View>
      <View style={{ padding: 30 }} />
      <EventsList events={events} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    lineHeight: 30,
    // fontWeight: 'normal',
    fontFamily: 'Inter_400Regular',
  },
});

export default EventsPage;
