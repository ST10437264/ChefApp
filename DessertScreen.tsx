import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function DessertScreen ({ navigation }: { navigation: any }) {
  // Sample data for main course menu items
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
  ];

  // Local state for menuItems and setMenuItems
  const [menuItems, setMenuItems] = useState({ Dessert: initialMenuData });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Dessert </Text>
      <Text style={styles.description}>Here are some delicious main options for you!</Text>

      {/* Render the list of menu items */}
      {menuItems.Dessert.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      ))}

      {/* Add New Item Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          // Pass menuItems and setMenuItems to the AddItemScreen
          navigation.navigate('AddItemScreen', {
            menuItems: menuItems,
            setMenuItems: setMenuItems,
          });
        }}
      >
        <Text style={styles.addButtonText}>Add New Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    color: '#555',
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
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  // Add styling for the "Add New Item" button
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
});
