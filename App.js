import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import SetUpScreen from './SetUpScreen';
import GenderScreen from './GenderScreen';
import WeightScreen from './WeightScreen';
import HeightScreen from './HeightScreen';
import ProfileScreen from './ProfileScreen';

import ProfilePage from './ProfilePage';
import NotificationsScreen from './NotificationsScreen';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();

const App = () => {
  // State để lưu thông tin profile và truyền dữ liệu giữa các màn hình
  const [profileData, setProfileData] = useState({
    fullName: '',
    nickname: '',
    email: '',
    mobileNumber: '',
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Màn hình chào mừng */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />

        {/* Màn hình đăng nhập và đăng ký */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Log In', headerBackTitleVisible: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignUpScreen} 
          options={{ title: 'Create Account', headerBackTitleVisible: false }} 
        />

        {/* Màn hình thiết lập thông tin */}
        <Stack.Screen 
          name="SetUp" 
          component={SetUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Gender" 
          component={GenderScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Weight" 
          component={WeightScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Height" 
          component={HeightScreen} 
          options={{ headerShown: false }} 
        />

        {/* Màn hình nhập thông tin cá nhân */}
        <Stack.Screen 
          name="ProfileScreen" 
          options={{ 
            title: 'Fill Profile', 
            headerBackTitleVisible: false 
          }}
        >
          {(props) => (
            <ProfileScreen 
              {...props} 
              setProfileData={setProfileData} 
              profileData={profileData} 
            />
          )}
        </Stack.Screen>

        {/* Màn hình hiển thị thông tin cá nhân */}
        <Stack.Screen 
          name="Profile" 
          options={{ 
            title: 'My Profile', 
            headerBackTitleVisible: false 
          }}
        >
          {(props) => (
            <ProfilePage 
              {...props} 
              profileData={profileData} 
            />
          )}
        </Stack.Screen>

        {/* Màn hình thông báo */}
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{ title: 'Notifications' }} 
        />

        {/* Màn hình tìm kiếm */}
        <Stack.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Search' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
