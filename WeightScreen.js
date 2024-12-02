import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WeightScreen = ({ navigation }) => {
  const [weight, setWeight] = useState(75); // Trọng lượng mặc định là 75 kg
  const [unit, setUnit] = useState('KG'); // Đơn vị mặc định là KG

  // Hàm tăng trọng lượng
  const increaseWeight = () => {
    if (weight < 150) { // Giới hạn tối đa 150
      setWeight(prevWeight => prevWeight + 1);
    }
  };

  // Hàm giảm trọng lượng
  const decreaseWeight = () => {
    if (weight > 35) { // Giới hạn tối thiểu 35
      setWeight(prevWeight => prevWeight - 1);
    }
  };

  // Hàm chuyển đổi giữa kg và lb
  const handleUnitChange = (newUnit) => {
    if (newUnit !== unit) {
      const convertedWeight = newUnit === 'KG'
        ? Math.max(35, Math.min(150, Math.round(weight / 2.205))) // Giới hạn khi chuyển đổi sang kg
        : Math.round(weight * 2.205);
      setWeight(convertedWeight);
      setUnit(newUnit);
    }
  };

  // Hàm xử lý khi nhập giá trị trọng lượng trực tiếp
  const handleWeightInput = (value) => {
    const numericValue = parseInt(value) || 0;
    if (numericValue >= 35 && numericValue <= 150) {
      setWeight(numericValue);
    } else if (numericValue < 35) {
      setWeight(35); // Nếu nhập thấp hơn 35, đặt về 35
    } else if (numericValue > 150) {
      setWeight(150); // Nếu nhập cao hơn 150, đặt về 150
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Tiêu đề và mô tả */}
      <Text style={styles.title}>What Is Your Weight?</Text>
      <Text style={styles.description}>
        Please adjust your weight using the controls below.
      </Text>

      {/* Tùy chọn đơn vị đo lường */}
      <View style={styles.unitContainer}>
        <TouchableOpacity onPress={() => handleUnitChange('KG')} style={[styles.unitButton, unit === 'KG' && styles.unitButtonSelected]}>
          <Text style={[styles.unitText, unit === 'KG' && styles.unitTextSelected]}>KG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleUnitChange('LB')} style={[styles.unitButton, unit === 'LB' && styles.unitButtonSelected]}>
          <Text style={[styles.unitText, unit === 'LB' && styles.unitTextSelected]}>LB</Text>
        </TouchableOpacity>
      </View>

      {/* Bộ điều khiển trọng lượng */}
      <View style={styles.weightControlContainer}>
        <TouchableOpacity onPress={decreaseWeight} style={styles.controlButton}>
          <Icon name="minus" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        
        {/* Trọng lượng hiện tại với nhập trực tiếp */}
        <TextInput
          style={styles.weightInput}
          keyboardType="numeric"
          value={weight.toString()}
          onChangeText={handleWeightInput} // Gọi hàm xử lý nhập trọng lượng
        />

        <TouchableOpacity onPress={increaseWeight} style={styles.controlButton}>
          <Icon name="plus" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Đơn vị đo lường */}
      <Text style={styles.unitLabel}>{unit}</Text>

      {/* Nút Continue */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Height')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 20,
  },
  unitContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  unitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  unitButtonSelected: {
    backgroundColor: '#007AFF',
  },
  unitText: {
    color: '#AAAAAA',
    fontSize: 16,
    fontWeight: 'bold',
  },
  unitTextSelected: {
    color: '#FFFFFF',
  },
  weightControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  controlButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  weightInput: {
    fontSize: 48,
    color: '#FFFFFF',
    textAlign: 'center',
    width: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#FFFFFF',
  },
  unitLabel: {
    fontSize: 24,
    color: '#AAAAAA',
    marginTop: -10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WeightScreen;
