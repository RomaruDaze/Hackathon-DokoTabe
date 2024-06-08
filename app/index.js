import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/components/Home/HomeScreen';
import SettingScreen from '../src/components/Settings/SettingScreen';
import Favourite from '../src/components/Favourite/Favourite';
import Startup from '../src/components/Startup/Startup'; // Import Startup
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create a stack navigator

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ホーム"
      screenOptions={{
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
          paddingBottom: 5,
          paddingTop: 8,
        },
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#fff',
          height: 0,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="お気に入り"
        component={Favourite}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ホーム"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'orange',
          tabBarIcon: ({ size }) => (
            <Image
              source={{ uri: 'https://i.postimg.cc/76Zk642W/temp-Imagem7-Uw-V5.avif' }}
              style={{ width: 70, height: 70, marginBottom: 40, borderRadius: 100 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="設定"
        component={SettingScreen}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Startup" component={Startup} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}