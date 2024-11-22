import React from 'react';   // (The IIE, 2024) 
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';   // (The IIE, 2024) //
import { useNavigation } from '@react-navigation/native';

export default function FilterScreen({ route }) {   // (The IIE, 2024) 
  const navigation = useNavigation();
  const { menuData } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <Image
        style={styles.imageSize}
        source={require("./images/logo.png")} 
      />

      {/* Filter Title */}
      <Text style={styles.title}>Filter by Course</Text> 

      {/* Starters Button */}
      <TouchableOpacity onPress={() => navigation.navigate('StartersScreen', { courseData: menuData.Starters, courseName: 'Starters' })}>
        <Text style={styles.button}>View Starters</Text>
      </TouchableOpacity>
      
      {/* Mains Button */}
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen', { courseData: menuData.Mains, courseName: 'Mains' })}>
        <Text style={styles.button}>View Mains</Text>
      </TouchableOpacity>
      
      {/* Desserts Button */}
      <TouchableOpacity onPress={() => navigation.navigate('DessertScreen', { courseData: menuData.Desserts, courseName: 'Desserts' })}>
        <Text style={styles.button}>View Desserts</Text>
      </TouchableOpacity>
    </ScrollView>
    // (React Native, 2024) 
  );
}

const styles = StyleSheet.create({    // (The IIE, 2024) 
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AE8BA2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  imageSize: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    marginBottom: 40,
  },
});

/* References */ 
/* The IIE. 2024. Mobile App Scripting [MAST5112 Module Manual]. The Independent Institute of Education: Unpublished [Accessed 20 November 2024]. */ 
/* React Native.dev. (n.d.). Button .React Native. [online] Available at: https://reactnative.dev/docs/components-and-apis [Accessed 220November 2024]. */ 
