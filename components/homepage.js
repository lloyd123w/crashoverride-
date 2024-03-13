import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const homepage = ({ navigation }) => {
  const handleLogout = () => {
    // Clear any user data or authentication tokens here
    navigation.replace('Landing'); // Replace the current screen with landingpage screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's Start </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
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
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default homepage;