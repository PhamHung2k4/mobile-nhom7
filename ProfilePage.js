import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "Madison Smith",
    email: "madison@example.com",
    mobile: "+123 567 89000",
    dob: "01 / 04 / 199X",
    weight: "75 Kg",
    height: "1.65 CM",
  });

  const handleUpdate = () => {
    setEditMode(false);
    alert("Profile Updated!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      {!editMode ? (
        <View>
          <Text style={styles.info}>Name: {userData.fullName}</Text>
          <Text style={styles.info}>Email: {userData.email}</Text>
          <Text style={styles.info}>Mobile: {userData.mobile}</Text>
          <Text style={styles.info}>Birthday: {userData.dob}</Text>
          <Text style={styles.info}>Weight: {userData.weight}</Text>
          <Text style={styles.info}>Height: {userData.height}</Text>
          <TouchableOpacity onPress={() => setEditMode(true)} style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {Object.keys(userData).map((key) => (
            <TextInput
              key={key}
              style={styles.input}
              value={userData[key]}
              onChangeText={(value) => setUserData({ ...userData, [key]: value })}
            />
          ))}
          <TouchableOpacity onPress={handleUpdate} style={styles.button}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// 2. Notifications Screen
const NotificationsScreen = () => {
  const [tab, setTab] = useState("Reminders");

  const notifications = {
    Reminders: [
      { id: "1", text: "New Workout is Available" },
      { id: "2", text: "Don't Forget to Drink Water" },
    ],
    System: [
      { id: "3", text: "We Detected a Login From a New Device" },
      { id: "4", text: "Privacy Policy Updated" },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        {["Reminders", "System"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.tabButton, tab === item && styles.activeTab]}
            onPress={() => setTab(item)}
          >
            <Text style={[styles.tabText, tab === item && styles.activeTabText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={notifications[tab]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

// 3. Search Screen
const SearchScreen = () => {
  const categories = ["All", "Workout", "Nutrition"];
  const [category, setCategory] = useState("All");
  const searchResults = {
    All: [{ id: "1", title: "Circuit Training" }, { id: "2", title: "Turkey Avocado Wrap" }],
    Workout: [{ id: "3", title: "Squat Exercise" }],
    Nutrition: [{ id: "4", title: "Greek Yogurt" }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabRow}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.tabButton, category === cat && styles.activeTab]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[styles.tabText, category === cat && styles.activeTabText]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={searchResults[category]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Main App Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 10, fontSize: 16 },
  button: { backgroundColor: "#007BFF", padding: 10, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16 },
  tabRow: { flexDirection: "row", marginBottom: 10 },
  tabButton: { flex: 1, padding: 10, alignItems: "center" },
  activeTab: { backgroundColor: "#007BFF" },
  tabText: { fontSize: 16 },
  activeTabText: { color: "#fff" },
  notification: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
});
