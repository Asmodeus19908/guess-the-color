import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorButton from '../components/ColorButton';
import ScoreDisplay from '../components/ScoreDisplay';

const GameScreen = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameActive, setGameActive] = useState(true);

  const predefinedColors = [
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00'  // Yellow
  ];

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const shuffledColors = [...predefinedColors].sort(() => Math.random() - 0.5);
    setColors(shuffledColors);
    setSelectedColor(null);
    setGameActive(true);
  };

  const handleColorSelection = (color) => {
    if (!gameActive) return;

    setSelectedColor(color);
    const correctColor = colors[0];

    if (color === correctColor) {
      setUserScore(prev => prev + 1);
      
      setTimeout(() => {
        const computerColor = colors[Math.floor(Math.random() * colors.length)];
        if (computerColor === correctColor) {
          setComputerScore(prev => prev + 1);
        }
        setGameActive(false);
        setTimeout(startNewGame, 1500);
      }, 1000);
    } else {
      setComputerScore(prev => prev + 1);
      setTimeout(startNewGame, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <ScoreDisplay userScore={userScore} computerScore={computerScore} />
      <Text style={styles.currentColor}>
        Match the color: {colors[0]}
      </Text>
      <View style={styles.options}>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            onPress={() => handleColorSelection(color)}
            disabled={!gameActive}
          />
        ))}
      </View>
      <Button
        title="Back to Menu"
        onPress={() => navigation.navigate('MainMenu')}
        disabled={gameActive}
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
    backgroundColor: '#f0f0f0',
  },
  currentColor: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    width: '100%',
  },
});

export default GameScreen;