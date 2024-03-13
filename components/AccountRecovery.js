import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AccountRecovery = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    // Here you can implement your account recovery logic, such as sending a password reset email
    console.log('Email:', email);

    // For demonstration purposes, show an alert to inform the user that a password reset email has been sent
    Alert.alert(
      'Password Recovery',
      'A password reset email has been sent to your email address.',
      [
        { text: 'OK', onPress: () => navigation.goBack() } // Navigate back to the previous screen
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Recovery</Text>
      <Text style={styles.description}>Enter your email address to recover your account:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={handleRecover}>
        <Text style={styles.button}>Recover Account</Text>
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#335A02',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
  },
});

export default AccountRecovery;
