import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('Registration'); // Navigate to Registration screen
  };

  const handleLogin = () => {
    navigation.navigate('loginpage'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to our work</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#335A02',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPage;