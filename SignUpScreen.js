import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu xác nhận không khớp');
      return;
    }

    if (!fullName || !email || !password) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      // Lưu thông tin tài khoản vào AsyncStorage
      const userData = { fullName, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      
      Alert.alert('Thành công', 'Đăng ký thành công!');
      navigation.navigate('Login'); // Chuyển đến màn hình Đăng nhập
    } catch (error) {
      Alert.alert('Lỗi', 'Đã có lỗi xảy ra khi đăng ký');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.subHeader}>Let's Start!</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email or Mobile Number"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Text style={styles.termsText}>
        By continuing, you agree to Terms of Use and Privacy Policy.
      </Text>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    color: '#00A1FF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#E6F7FF',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  termsText: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginVertical: 10,
  },
  signupButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SignUpScreen;
