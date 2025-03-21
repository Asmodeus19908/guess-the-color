import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

const ColorButton = ({ color, onPress, disabled }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={{ backgroundColor: color, borderRadius: 40, width: 80, height: 80 }} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ColorButton;