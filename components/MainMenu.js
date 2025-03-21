import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color Match Game</Text>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate('GameScreen')}
      />
      <Button
        title="Instructions"
        onPress={() => navigation.navigate('Instructions')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainMenu;