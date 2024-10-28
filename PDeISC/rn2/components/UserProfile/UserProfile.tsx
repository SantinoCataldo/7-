import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as DocumentPicker from 'expo-document-picker';

interface UserProfile {
  name: string;
  email: string;
  photo: string;
  address: string;
  phone: string;
  documentScan: string;
}

export default function UserProfile() {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    photo: '',
    address: '',
    phone: '',
    documentScan: '',
  });

  useEffect(() => {
    // Fetch user profile data from your server
    // and update the state
    // For demonstration, we'll just log a message
    console.log('Fetching user profile data...');
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile({ ...profile, photo: result.assets[0].uri });
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    // You might want to use a geocoding service to convert coordinates to an address
    setProfile({ ...profile, address: `${location.coords.latitude}, ${location.coords.longitude}` });
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // all files
        copyToCacheDirectory: false,
      });

      if (!result.canceled) {
        // El documento fue seleccionado exitosamente
        setProfile({ ...profile, documentScan: result.assets[0].uri });
        console.log('Documento seleccionado:', result.assets[0].uri);
      } else {
        // La selección del documento fue cancelada
        console.log('Selección de documento cancelada');
      }
    } catch (err) {
      console.error('Error al seleccionar el documento:', err);
    }
  };


  const updateProfile = () => {
    // Send updated profile to your server
    console.log('Updated profile:', profile);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={profile.email}
        onChangeText={(text) => setProfile({ ...profile, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={profile.phone}
        onChangeText={(text) => setProfile({ ...profile, phone: text })}
      />
      <Button title="Pick an image" onPress={pickImage} />
      {profile.photo && <Image source={{ uri: profile.photo }} style={styles.image} />}
      <Button title="Get current location" onPress={getLocation} />
      <Text style={styles.address}>Address: {profile.address}</Text>
      <Button title="Pick Document" onPress={pickDocument} />
      {profile.documentScan && <Text style={styles.documentName}>Document: {profile.documentScan.split('/').pop()}</Text>}
      <Button title="Update Profile" onPress={updateProfile} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  address: {
    marginVertical: 10,
  },
  documentName: {
    marginVertical: 10,
  },
});