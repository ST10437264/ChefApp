import React, { useState } from 'react';  // (The IIE, 2024) 
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function AddItemsScreen({ route }) {   // (The IIE, 2024) 
  const { menuData, setMenuData } = route.params;  
  const [newItem, setNewItem] = useState({ title: '', description: '', price: '' });
  const [selectedCourse, setSelectedCourse] = useState('Starters');
  const navigation = useNavigation();

  const handleSave = () => {
    if (!newItem.title || !newItem.description || !newItem.price) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    const newItemData = {
      id: Date.now(), 
      title: newItem.title,
      description: newItem.description,
      price: parseFloat(newItem.price),
    };

    
    setMenuData((prevData) => {
      
      const updatedData = { ...prevData };

      
      updatedData[selectedCourse] = [...updatedData[selectedCourse], newItemData];
      return updatedData;
    });

   
    setNewItem({ title: '', description: '', price: '' });  // (React Native, 2024)
    navigation.goBack();  // Navigate back to the HomeScreen
  };

  const handleRemoveItem = (itemId) => {
    setMenuData((prevData) => {
    
      const updatedData = { ...prevData };

     
      updatedData[selectedCourse] = updatedData[selectedCourse].filter(
        (existingItem) => existingItem.id !== itemId 
      );
      return updatedData;  // (React Native, 2024)
    });
  };

  return (  // (The IIE, 2024) 
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./images/logo.png')} />
      <Text style={styles.title}>Add New Menu Item</Text>

      {/* Course Selection */}
      <View style={styles.courseSelectionContainer}>
        <TouchableOpacity onPress={() => setSelectedCourse('Starters')}>
          <Text style={selectedCourse === 'Starters' ? styles.selectedButton : styles.button}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCourse('Mains')}>
          <Text style={selectedCourse === 'Mains' ? styles.selectedButton : styles.button}>Mains</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCourse('Desserts')}>
          <Text style={selectedCourse === 'Desserts' ? styles.selectedButton : styles.button}>Desserts</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Item Title"
        value={newItem.title}
        onChangeText={(text) => setNewItem({ ...newItem, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newItem.description}
        onChangeText={(text) => setNewItem({ ...newItem, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={newItem.price}
        keyboardType="numeric"
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
      />

      {/* Save Button */}
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Save Item</Text>
      </TouchableOpacity>

      {/* Menu List */}
      <FlatList
        data={menuData[selectedCourse]}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title} - ${item.price}</Text>
            <TouchableOpacity
              onPress={() => handleRemoveItem(item.id)} 
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({   // (The IIE, 2024) 
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AE8BA2',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  selectedButton: {
    backgroundColor: 'lightgray',
    padding: 11,
    borderRadius: 5,
    textAlign: 'center',
  },
  courseSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  
  });
  
/* References */ 

/* The IIE. 2024. Mobile App Scripting [MAST5112 Module Manual]. The Independent Institute of Education: Unpublished [Accessed 20 November 2024]. */ 
/* React Native.dev. (n.d.). Button .React Native. [online] Available at: https://reactnative.dev/docs/components-and-apis [Accessed 20 November 2024]. */ 