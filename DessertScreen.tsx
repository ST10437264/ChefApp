import React, { useState } from 'react';  // (The IIE, 2024)
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,Image } from 'react-native';

export default function DessertScreen ({ navigation }: { navigation: any }) {  // (The IIE, 2024)
  
  const initialMenuData = [
    {
      title: 'Lemon Cheesecake',
      description: 'Lemon cheesecake made with fresh lemon juice',
      price: 75.00,
    },
    {
      title: 'Double Chocolate Fudge Cake',
      description: 'Warm rich double chocolate fudge cake along with vanilla ice cream',
      price: 65.00,
    },
    {
      title: 'Rustic Apple Tart',
      description: 'warmly baked butter tart crust filled with cooked green apples, vanilla essence',
      price: 96.00,
    },
  ];

  
  const [menuItems, setMenuItems] = useState({ Dessert: initialMenuData });  // (React Native, 2024)

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageSize}
        source={require("./images/logo.png")} 
      />
      <Text style={styles.title}> Dessert </Text>
      <Text style={styles.description}>Here are some delicious main options for you!</Text>

      {/* Render the list of menu items */}
      {menuItems.Dessert.map((item, index) => (  // (React Native, 2024)
        <View key={index} style={styles.menuItem}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({  // (The IIE, 2024)
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AE8BA2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
  
  addButton: {
    backgroundColor: 'silver',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
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