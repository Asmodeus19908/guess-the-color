import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ScoreDisplay = ({ userScore, computerScore }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Your Score: {userScore}</Text>
      <Text style={styles.score}>Computer Score: {computerScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ScoreDisplay;