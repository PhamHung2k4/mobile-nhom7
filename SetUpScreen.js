import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SetUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: './assets/beautiful-young-sporty-woman-training-workout-gym 4.png' }} style={styles.image} />
      <Text style={styles.title}>Consistency Is The Key To Progress. Don't Give Up!</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gender')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '50%',  // Chiều cao chiếm 50% màn hình, bạn có thể điều chỉnh
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SetUpScreen;
