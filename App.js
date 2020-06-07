import React, {component, useState} from 'react';

import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
          <Text style={ styles.h1}> Hello! </Text>
          <View style={styles.countContainer}>
            <Text>Count: {count}</Text>
          </View>
          <TouchableOpacity onPress={onPress}>
            <Image 
              blurRadius={0.9}
              source={{ uri: 'https://picsum.photos/200/300'}} 
              style={styles.backgroundImage} 
            />
          </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#345',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage : {
    width: 200,
    height: 300,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#cbb',
  }
});
