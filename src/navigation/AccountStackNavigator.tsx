import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '@/screens/AccountScreen';
import { EditProfileScreen } from '@/screens/EditProfileScreen';
import { ChangePasswordScreen } from '@/screens/ChangePasswordScreen';

import { AccountStackParamList } from '@/types/navigation';
import { Colors } from '@/constants/colors';

const Stack = createStackNavigator<AccountStackParamList>();

export const AccountStackNavigator: React.FC = () => {
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
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: 'Minha Conta',
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          title: 'Editar Perfil',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          title: 'Alterar Senha',
        }}
      />
    </Stack.Navigator>
  );
};

