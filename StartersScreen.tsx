import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function StartersScreen({ navigation, menuItems, setMenuItems }: { navigation: any, menuItems: any, setMenuItems: any }) {
  // Sample starter items data
  const menuData = [
    {
      title: 'Green Salad',
      description: 'green mix, carrot, cherry tomatoes, walnuts',
      price: 98.00,
    },
    {
      title: 'Indian Cauliflower',
      description: 'crispy cauliflower, red curry sauce, yogurt, green mixed leaves',
      price: 95.00,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Starters</Text>
      <Text style={styles.description}>
        Here are some delicious starter options for you!
      </Text>

      {/* Render the list of menu items */}
      {menuData.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      ))}

      {/* Add New Item Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddItemScreen', {
          menuItems: menuItems, // menuItems from parent state or props
          setMenuItems: setMenuItems, // setMenuItems function from parent state
        })}
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
  addButton: {
    backgroundColor: 'silver',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
