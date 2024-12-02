import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FG</Text>
      <Text style={styles.title}>FIT GROUP7</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupButtonText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
  },
  logo: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#007AFF',
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#000000', // Màu chữ đen cho nút Đăng nhập
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButtonText: {
    color: '#FFFFFF', // Màu chữ trắng cho nút Đăng ký
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
