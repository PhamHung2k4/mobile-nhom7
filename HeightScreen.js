import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeightSelector = ({ navigation }) => {
  const [selectedHeight, setSelectedHeight] = useState(165);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const height = Math.round(scrollPosition / 20) + 140; // Điều chỉnh khoảng cách cuộn (20 pixel)
    setSelectedHeight(height);
  };

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#007AFF" />
      </TouchableOpacity>

      <Text style={styles.title}>What Is Your Height?</Text>
      <Text style={styles.description}>
        You can freely adjust your height from 140cm to 250cm.
      </Text>

      {/* Hiển thị chiều cao được chọn */}
      <View style={styles.selectedHeightContainer}>
        <Text style={styles.selectedHeight}>{selectedHeight}</Text>
        <Text style={styles.selectedHeightUnit}>Cm</Text>
      </View>

      {/* Thanh cuộn điều chỉnh chiều cao */}
      <View style={styles.rulerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          snapToInterval={20} // Điều chỉnh khoảng cách giữa các số
          decelerationRate="fast"
        >
          {Array.from({ length: 111 }, (_, i) => i + 140).map((height) => (
            <View key={height} style={styles.rulerMark}>
              <Text style={styles.rulerText}>{height}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Mũi tên chỉ vào số chiều cao */}
        <View style={styles.arrowIndicator}>
          <Icon name="caret-left" size={20} color="blue" />
        </View>
      </View>

      {/* Nút Continue */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileScreen')} // Chuyển đến màn hình ProfileScreen
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 30,
  },
  selectedHeightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 30,
  },
  selectedHeight: {
    fontSize: 48,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  selectedHeightUnit: {
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 5,
  },
  rulerContainer: {
    position: 'relative',
    height: 300,
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingVertical: 150,
  },
  rulerMark: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rulerText: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  arrowIndicator: {
    position: 'absolute',
    top: 140,
    right: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HeightSelector;
