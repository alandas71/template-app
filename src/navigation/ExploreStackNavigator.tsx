import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ExploreScreen } from '@/screens/ExploreScreen';
import { ExploreDetailsScreen } from '@/screens/ExploreDetailsScreen';

import { ExploreStackParamList } from '@/types/navigation';
import { Colors } from '@/constants/colors';

const Stack = createStackNavigator<ExploreStackParamList>();

export const ExploreStackNavigator: React.FC = () => {
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
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: 'Explorar',
        }}
      />
      <Stack.Screen
        name="ExploreDetails"
        component={ExploreDetailsScreen}
        options={({ route }) => ({
          title: `Categoria: ${route.params.category}`,
        })}
      />
    </Stack.Navigator>
  );
};

