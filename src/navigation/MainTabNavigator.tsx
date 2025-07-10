import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import { HomeStackNavigator } from './HomeStackNavigator';
import { ExploreStackNavigator } from './ExploreStackNavigator';
import { FavoritesStackNavigator } from './FavoritesStackNavigator';
import { AccountStackNavigator } from './AccountStackNavigator';

import { MainTabParamList } from '@/types/navigation';
import { Colors } from '@/constants/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Ícones simples usando Text (substitua por react-native-vector-icons se preferir)
const TabIcon: React.FC<{ name: string; focused: boolean }> = ({ name, focused }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return '🏠';
      case 'explore':
        return '🔍';
      case 'favorites':
        return '❤️';
      case 'account':
        return '👤';
      default:
        return '📱';
    }
  };

  return (
    <View className="items-center justify-center">
      <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.6 }}>
        {getIcon(name)}
      </Text>
    </View>
  );
};

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name.toLowerCase()} focused={focused} />
        ),
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.gray400,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopWidth: 1,
          borderTopColor: Colors.gray200,
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Início',
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackNavigator}
        options={{
          tabBarLabel: 'Explorar',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
        options={{
          tabBarLabel: 'Favoritos',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          tabBarLabel: 'Conta',
        }}
      />
    </Tab.Navigator>
  );
};

