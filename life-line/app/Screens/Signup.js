import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, ScrollView, View, Alert, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DonorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const handleSubmit = () => {
    if (name && email && address && bloodGroup) {
      Alert.alert("Form Submitted", `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nBlood Group: ${bloodGroup}`);
    } else {
      Alert.alert("Error", "Please fill all the fields.");
    }
  };

  // Get device width for responsive design
  const deviceWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.title}>Blood Donation Form</Text>

      {/* Name Field */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={[styles.input, { width: deviceWidth * 0.9 }]} // Responsive width
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      {/* Phone Number Field */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={[styles.input, { width: deviceWidth * 0.9 }]} // Responsive width
        placeholder="ex rajisgay@gmail.com"
        // keyboardType="phone-pad"
        value={email}
        onChangeText={setEmail}
      />

      {/* Address Field */}
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, { width: deviceWidth * 0.9 }]} // Responsive width
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      {/* Blood Group Field */}
      <Text style={styles.label}>Blood Group</Text>
      <View style={[styles.pickerContainer, { width: deviceWidth * 0.9 }]}>
        <Picker
          selectedValue={bloodGroup}
          onValueChange={(itemValue) => setBloodGroup(itemValue)}
          // style={styles.picker}
          style={{textAlign:'center', marginTop:-80,}}
        >
          {/* <Picker.Item label="Select your blood group" value="" /> */}
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A-" value="A-" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B-" value="B-" />
          <Picker.Item label="AB+" value="AB+" />
          <Picker.Item label="AB-" value="AB-" />
          <Picker.Item label="O+" value="O+" />
          <Picker.Item label="O-" value="O-" />
        </Picker>
      </View>

      {/* Submit Button */}
      <View style={{ width: deviceWidth * 0.9, marginTop: 20, marginTop:40, fontSize:'30'}}>
        <Button title="Next" onPress={handleSubmit} color="#6200ee" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    // alignItems: 'center', // Center content horizontally
    // paddingVertical: 20,                              
    // backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
    marginTop: 100,
  },
  label: {
    fontSize: 20,
    color: '#555',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    
  },
  pickerContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',

    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    
  },
  // picker: {
  //   height: 30,
  // },
});
