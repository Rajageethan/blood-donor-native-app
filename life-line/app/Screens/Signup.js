import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, ScrollView, View, Alert, Modal, TouchableOpacity } from 'react-native';

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    if (name && email && address && bloodGroup) {
      Alert.alert("Form Submitted", `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nBlood Group: ${bloodGroup}`);
    } else {
      Alert.alert("Error", "Please fill all the fields.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.title}>Blood Donation Form</Text>

      {/* Name Field */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Address Field */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: praveentharkuri@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      {/* Address Field */}
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      {/* Blood Group Selection */}
      <Text style={styles.label}>Blood Group</Text>
      <TouchableOpacity style={styles.bloodGroupButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.bloodGroupText}>{bloodGroup || "Select your blood group"}</Text>
      </TouchableOpacity>

      {/* Modal for Blood Group Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Blood Group</Text>
            {bloodGroups.map((group) => (
              <TouchableOpacity
                key={group}
                style={styles.modalOption}
                onPress={() => {
                  setBloodGroup(group);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalOptionText}>{group}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleSubmit} color="#c71a28" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Primary color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#000000', // Black color
  },
  label: {
    fontSize: 20,
    color: '#000000', // Black color
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#c71a28', // Red color for borders
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Primary color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  bloodGroupButton: {
    borderColor: '#c71a28',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#D2DDD0', // Light background color
    alignItems: 'center',
  },
  bloodGroupText: {
    color: '#000000', // Black text color
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000', // Black color
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D2DDD0', // Light border for options
    width: '100%',
  },
  modalOptionText: {
    fontSize: 18,
    color: '#000000', // Black color
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#c71a28', // Red color for close button
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF', // White text color
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%', // Full width
  },
});
