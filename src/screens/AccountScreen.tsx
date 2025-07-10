import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Avatar,
  Card,
  CardContent,
  Button,
  Badge,
} from '@/components';
import { AccountStackScreenProps } from '@/types/navigation';

type Props = AccountStackScreenProps<'AccountScreen'>;

const menuItems = [
  {
    id: '1',
    title: 'Editar Perfil',
    description: 'Altere suas informações pessoais',
    icon: '👤',
    action: 'EditProfile' as const,
  },
  {
    id: '2',
    title: 'Alterar Senha',
    description: 'Mantenha sua conta segura',
    icon: '🔒',
    action: 'ChangePassword' as const,
  },
  {
    id: '3',
    title: 'Configurações',
    description: 'Personalize sua experiência',
    icon: '⚙️',
    action: 'Settings' as const,
  },
  {
    id: '4',
    title: 'Notificações',
    description: 'Gerencie suas notificações',
    icon: '🔔',
    action: 'Notifications' as const,
  },
];

export const AccountScreen: React.FC<Props> = ({ navigation }) => {
  const handleMenuPress = (action: string) => {
    if (action === 'EditProfile' || action === 'ChangePassword') {
      navigation.navigate(action);
    } else {
      navigation.navigate(action as any);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header do perfil */}
        <View className="bg-secondary-500 px-4 py-8">
          <View className="items-center">
            <Avatar
              name="João Silva"
              size="2xl"
              showBorder
              borderColor="#ffffff"
            />
            <Text className="text-xl font-bold text-white mt-4">
              João Silva
            </Text>
            <Text className="text-secondary-100 mb-4">
              joao.silva@email.com
            </Text>
            
            <View className="flex-row space-x-4">
              <Badge
                label="Premium"
                variant="primary"
                size="sm"
              />
              <Badge
                label="Verificado"
                variant="success"
                size="sm"
              />
            </View>
          </View>
        </View>

        {/* Estatísticas do usuário */}
        <View className="flex-row px-4 py-6 bg-white">
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-secondary-500">
              24
            </Text>
            <Text className="text-sm text-gray-600">
              Projetos
            </Text>
          </View>
          
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-primary-500">
              156
            </Text>
            <Text className="text-sm text-gray-600">
              Tarefas
            </Text>
          </View>
          
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-accent-500">
              89%
            </Text>
            <Text className="text-sm text-gray-600">
              Conclusão
            </Text>
          </View>
        </View>

        {/* Menu de opções */}
        <View className="px-4 py-2">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              variant="default"
              padding="md"
              margin="none"
              className="mb-3"
              pressable
              onPress={() => handleMenuPress(item.action)}
            >
              <CardContent>
                <View className="flex-row items-center">
                  <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-4">
                    <Text style={{ fontSize: 20 }}>
                      {item.icon}
                    </Text>
                  </View>
                  
                  <View className="flex-1">
                    <Text className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-sm text-gray-600">
                      {item.description}
                    </Text>
                  </View>
                  
                  <Text className="text-gray-400 text-lg">
                    ›
                  </Text>
                </View>
              </CardContent>
            </Card>
          ))}
        </View>

        {/* Botão de logout */}
        <View className="px-4 py-6">
          <Button
            title="Sair da Conta"
            variant="outline"
            fullWidth
            onPress={() => {
              // Implementar logout
              console.log('Logout pressed');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

