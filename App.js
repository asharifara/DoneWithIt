import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("app executed");
  return (
    <View style={styles.container}>
      <Text> Test App!! </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
