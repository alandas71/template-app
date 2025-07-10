import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '@/screens/HomeScreen';
import { HomeDetailsScreen } from '@/screens/HomeDetailsScreen';

import { HomeStackParamList } from '@/types/navigation';
import { Colors } from '@/constants/colors';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.white,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray200,
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: Colors.textPrimary,
        },
        headerTintColor: Colors.secondary,
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Início',
        }}
      />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetailsScreen}
        options={{
          title: 'Detalhes',
        }}
      />
    </Stack.Navigator>
  );
};

