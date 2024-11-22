import React, { useState } from 'react';  // (The IIE, 2024) 
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  
  const [menuData, setMenuData] = useState({    // (React Native, 2024)
    Starters: [
      {
        id: '1', // added a number so the the data could be recognised for each item
        title: 'Green Salad',
        description: 'green mix, carrot, cherry tomatoes, walnuts',
        price: 98.00,
      },
      {
        id: '2', 
        title: 'Indian Cauliflower',
        description: 'crispy cauliflower, red curry sauce, yogurt, green mixed leaves',
        price: 95.00,
      },
    ],

    Mains: [
      {
        id: '3', 
        title: 'Bombay Butter Salmon',
        description: 'mixed spices, coriander, coconut milk, cucumbers',
        price: 200.00,
      },
      {
        id: '4',
        title: 'Cheese Ravioli',
        description: 'burnt tomato, salsa, sage butter & crispy mint',
        price: 150.00,
      },
    ],

    Desserts: [
      {
        id: '5', 
        title: 'Lemon Cheesecake',
        description: 'lemon cheesecake made with fresh lemon juice',
        price: 75.00,
      },
      {
        id: '6',
        title: 'Double Chocolate Fudge Cake',
        description: 'warm rich double chocolate fudge cake along with vanilla ice cream',
        price: 65.00,
      },
    ],
  });

  // Calculate average price for each course   // (React Native, 2024) 
  const calculateAveragePrice = (course) => {
    if (menuData[course].length === 0) return 0;
    const totalPrice = menuData[course].reduce((acc, item) => acc + item.price, 0);
    return totalPrice / menuData[course].length;
  };

  return (
    <ScrollView style={styles.container}> 
      <Image
        style={styles.imageSize}
        source={require("./images/logo.png")} 
      />
      <Text style={styles.title}>Welcome to Christoffel's Kitchen!</Text>

      {/* Starters Section */}
      <View style={styles.courseContainer}>
        <Text style={styles.averagePrice}>
          Starters: ${calculateAveragePrice('Starters').toFixed(2)}
        </Text>
        <FlatList
          data={menuData.Starters}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id} 
        />
      </View>

      {/* Mains Section */}
      <View style={styles.courseContainer}>
        <Text style={styles.averagePrice}>
          Mains: ${calculateAveragePrice('Mains').toFixed(2)}
        </Text>
        <FlatList
          data={menuData.Mains}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id} 
        />
      </View>

      {/* Desserts Section */}
      <View style={styles.courseContainer}>
        <Text style={styles.averagePrice}>
          Desserts: ${calculateAveragePrice('Desserts').toFixed(2)}
        </Text>
        <FlatList
          data={menuData.Desserts}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id} 
        />
      </View>

      {/* Buttons Section */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddItemsScreen', { menuData, setMenuData })}
      >
        <Text style={styles.button}>Add Items</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('FilterScreen', { menuData })}
      >
        <Text style={styles.button}>Filter by Course</Text>
      </TouchableOpacity>
    </ScrollView>  // (The IIE, 2024) 
  )
}

const styles = StyleSheet.create({   // (The IIE, 2024) 
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
  imageSize: {
    width: 120,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  courseContainer: {
    marginBottom: 30,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  averagePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
});

/* References */ 
/* The IIE. 2024. Mobile App Scripting [MAST5112 Module Manual]. The Independent Institute of Education: Unpublished [Accessed 20 November 2024]. */ 
/* React Native.dev. (n.d.). Button .React Native. [online] Available at: https://reactnative.dev/docs/components-and-apis [Accessed 220November 2024]. */ 