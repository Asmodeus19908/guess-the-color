import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Instructions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Play</Text>
      <Text style={styles.instructions}>
        Match the color displayed at the top by selecting the correct color button. 
        You and the computer take turns. The first to reach 5 points wins!
      </Text>
      <Button
        title="Back to Menu"
        onPress={() => navigation.navigate('MainMenu')}
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
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instructions: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Instructions;