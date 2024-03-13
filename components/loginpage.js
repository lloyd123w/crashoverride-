import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic, such as validating credentials
    console.log('Email:', email);
    navigation.navigate('homepage'); // Navigate to the homepage
    // Implement your login logic here...
  };
  
  const handleSignUp = () => {
    navigation.navigate('Registration'); // Navigate to the registration page
  };

  const handleForgotPassword = () => {
    navigation.navigate('AccountRecovery'); // Navigate to the AccountRecovery screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>Forgot Password?</Text> {/* Link/button for forgot password */}
      <Text style={styles.signUpText}>Don't have an account? </Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpLink}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#335A02',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
    marginBottom: 10,
  },
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  signUpText: {
    marginBottom: 10,
  },
  signUpLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
