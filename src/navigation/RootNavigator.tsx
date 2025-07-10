import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import { MainTabNavigator } from './MainTabNavigator';
import { ProfileScreen } from '@/screens/ProfileScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { NotificationsScreen } from '@/screens/NotificationsScreen';
import { SearchScreen } from '@/screens/SearchScreen';
import { DetailsScreen } from '@/screens/DetailsScreen';

import { RootStackParamList } from '@/types/navigation';
import { Colors } from '@/constants/colors';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.white}
        translucent={false}
      />
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
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Perfil',
            headerStyle: {
              backgroundColor: Colors.secondary,
            },
            headerTitleStyle: {
              color: Colors.white,
            },
            headerTintColor: Colors.white,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Configurações' }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ title: 'Notificações' }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Buscar' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

