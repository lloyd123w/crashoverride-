import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Here you can implement your registration logic, such as sending data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleLogin = () => {
    navigation.navigate('Landing'); // Navigate back to Landing page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
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
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleRegistration}>
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>Already have an account? </Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.loginLink}>Login</Text>
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
  loginText: {
    marginBottom: 10,
  },
  loginLink: {
    color: '#00000',
    textDecorationLine: 'underline',
  },
});

export default RegistrationPage;
