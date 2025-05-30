import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScreenA() {
  return (
    <View style={styles.container}>
      <Text>Pantalla A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});