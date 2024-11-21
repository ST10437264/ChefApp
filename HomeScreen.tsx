import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer} // Correctly apply justifyContent here
    >
      <StatusBar style="auto" />

      <Image style={styles.logo} source={require('./images/logo.png')} />
      <Text style={styles.welcome}>Welcome to Christoffel's Culinary!</Text>

      <Text style={styles.moreInfoText}>
        Here in this page, you will find buttons for different courses 
        which are Starters, Main, and Dessert that will lead you to the courses available when clicked.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StartersScreen')}
        >
          <Text style={styles.buttonText}>Starters</Text>
        </TouchableOpacity>

        <View style={styles.buttonSpacing} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainScreen')}
        >
          <Text style={styles.buttonText}>Main</Text>
        </TouchableOpacity>

        <View style={styles.buttonSpacing} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DessertScreen')}
        >
          <Text style={styles.buttonText}>Dessert</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#AE8BA2',
  },
  contentContainer: {
    justifyContent: 'center',  // Correctly apply justifyContent here
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  moreInfoText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'silver',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    marginBottom: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonSpacing: {
    marginVertical: 10,
  },
});
