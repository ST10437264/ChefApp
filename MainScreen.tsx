import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image } from 'react-native'; // (THE IIE, 2024) 

export default function MainScreen({ navigation }: { navigation: any }) {
  
  const initialMenuData = [
    {
      title: 'Bombay Butter Salmon',
      description: 'mixed spices, coriander, coconut milk, cucumbers',
      price: 200.00,
    },
    {
      title: 'Cheese Ravioli',
      description: 'burnt tomato, salsa, sage butter & crispy mint',
      price: 150.00,
    },
    {
      title: 'Calamari',
      description: 'pepper cream, chicken peas, crispy bacon, grilled onions and coriander',
      price: 90.00,
    },
  ];

  
  const [menuItems, setMenuItems] = useState({ Main: initialMenuData });  // (React Native, 2024)

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageSize}
        source={require("./images/logo.png")} 
      />
      <Text style={styles.title}>Main</Text>
      <Text style={styles.description}>Here are some delicious main options for you!</Text>

      {/* Render the list of menu items */}
      {menuItems.Main.map((item, index) => (
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