import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';

export default function Signup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSubmit = () => {
    if (name && phone && address && bloodGroup) {
      Alert.alert("Form Submitted", `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nBlood Group: ${bloodGroup}`);
    } else {
      Alert.alert("Error", "Please fill all the fields.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Information Form</Text>

      {/* Name Field */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Phone Number Field */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Address Field */}
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      {/* Blood Group Field */}
      <Text style={styles.label}>Blood Group</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your blood group"
        value={bloodGroup}
        onChangeText={setBloodGroup}
      />

      {/* Submit Button */}
      <Button title="Submit" onPress={handleSubmit} color="#6200ee" />

      {/* Display Information */}
      {/* {name || phone || address || bloodGroup ? (
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>Name: {name}</Text>
          <Text style={styles.displayText}>Phone: {phone}</Text>
          <Text style={styles.displayText}>Address: {address}</Text>
          <Text style={styles.displayText}>Blood Group: {bloodGroup}</Text>
        </View>
      ) : null} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
    marginTop:50
    
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#555',
    fontWeight: 'bold',
    marginBottom:20
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  displayContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  displayText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
});

