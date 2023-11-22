import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToTask from './src/components/totask';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function App() {

  return (
      <View style={styles.container}>

      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}>Rairu's Today's Task</Text>

        <ToTask />

      </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232D3F',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
