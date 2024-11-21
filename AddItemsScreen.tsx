import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';

export default function AddItemScreen ({ navigation }: { navigation: any }) {
  const [menuItems, setMenuItems] = useState({
    Starters: [],
    Main: [],
    Dessert: [],
  });

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Starters'); // Default category

  // Add item to the selected category
  const addItem = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Error', 'Please enter valid dish name, description, and price');
      return;
    }

    const newItem = {
      title: dishName,
      description,
      price: parseFloat(price), // Ensure price is a number
    };

    setMenuItems(prevItems => ({
      ...prevItems,
      [selectedCategory]: [...prevItems[selectedCategory], newItem], // Add new item to selected category
    }));

    // Reset form fields
    setDishName('');
    setDescription('');
    setPrice('');
  };

  // Calculate the average price for a given category
  const calculateAveragePrice = (category) => {
    const items = menuItems[category];
    if (items.length === 0) return 0;
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    return totalPrice / items.length;
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <View style={styles.categoryContainer}>
        {['Starters', 'Main', 'Dessert'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Add Item" onPress={addItem} color="silver" />

      <Text style={styles.sectionTitle}>
        Starters (Average Price: ${calculateAveragePrice('Starters').toFixed(2)})
      </Text>
      <Text style={styles.sectionTitle}>
        Main (Average Price: ${calculateAveragePrice('Main').toFixed(2)})
      </Text>
      <Text style={styles.sectionTitle}>
        Dessert (Average Price: ${calculateAveragePrice('Dessert').toFixed(2)})
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#AE8BA2',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: 'silver',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: '#AE8BA2',
  },
  categoryText: {
    color: 'black',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
