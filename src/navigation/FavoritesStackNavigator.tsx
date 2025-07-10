import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FavoritesScreen } from '@/screens/FavoritesScreen';
import { FavoriteDetailsScreen } from '@/screens/FavoriteDetailsScreen';

import { FavoritesStackParamList } from '@/types/navigation';
import { Colors } from '@/constants/colors';

const Stack = createStackNavigator<FavoritesStackParamList>();

export const FavoritesStackNavigator: React.FC = () => {
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
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favoritos',
        }}
      />
      <Stack.Screen
        name="FavoriteDetails"
        component={FavoriteDetailsScreen}
        options={{
          title: 'Detalhes do Favorito',
        }}
      />
    </Stack.Navigator>
  );
};

