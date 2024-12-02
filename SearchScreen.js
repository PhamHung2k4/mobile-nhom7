import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const searchResults = [
    { id: '1', title: 'Squat Exercise', category: 'Workout' },
    { id: '2', title: 'Full Body Stretching', category: 'Workout' },
    { id: '3', title: 'Delights With Greek Yogurt', category: 'Nutrition' },
  ];

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here..." />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultItem: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchScreen;
