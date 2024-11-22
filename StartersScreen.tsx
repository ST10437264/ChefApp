import React from 'react'; // (The IIE, 2024)
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native';  // (The IIE, 2024)

export default function StartersScreen({ navigation, menuItems, setMenuItems }: { navigation: any, menuItems: any, setMenuItems: any }) {  // (React Native, 2024)
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
    {
      title: 'Fig, mozzarella and serrano ham salad',
      description: 'figs are marinated in a honey mustard dressing, then tossed with creamy mozzarella, salty serrano ham and peppery rocket',
      price: 100.00,
    },

  ];

  return ( // (The IIE, 2024) 
    <ScrollView style={styles.container}>
      <Image
        style={styles.imageSize}
        source={require("./images/logo.png")} 
      />
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({  //(The IIE, 2024)
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
