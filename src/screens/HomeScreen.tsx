import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Badge,
  NotificationBadge,
} from '@/components';
import { HomeStackScreenProps } from '@/types/navigation';
import { Colors } from '@/constants/colors';

type Props = HomeStackScreenProps<'HomeScreen'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleNavigateToDetails = (id: string) => {
    navigation.navigate('HomeDetails', { id });
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('Profile', { userId: '123' });
  };

  const handleNavigateToNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Header com avatar e notificações */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center">
            <Avatar
              name="João Silva"
              size="lg"
              pressable
              onPress={handleNavigateToProfile}
            />
            <View className="ml-4">
              <Text className="text-lg font-semibold text-gray-900">
                Olá, João!
              </Text>
              <Text className="text-sm text-gray-500">
                Bem-vindo de volta
              </Text>
            </View>
          </View>
          
          <View className="relative">
            <TouchableOpacity
              className="p-2 bg-white rounded-full shadow-soft"
              onPress={handleNavigateToNotifications}
            >
              <Text style={{ fontSize: 20 }}>🔔</Text>
            </TouchableOpacity>
            <View className="absolute -top-1 -right-1">
              <NotificationBadge count={3} size="sm" />
            </View>
          </View>
        </View>

        {/* Cards de estatísticas */}
        <View className="flex-row mb-6">
          <View className="flex-1 mr-2">
            <Card variant="elevated" padding="md">
              <CardContent>
                <Text className="text-2xl font-bold text-secondary-500 mb-1">
                  24
                </Text>
                <Text className="text-sm text-gray-600">
                  Tarefas Concluídas
                </Text>
              </CardContent>
            </Card>
          </View>
          
          <View className="flex-1 ml-2">
            <Card variant="elevated" padding="md">
              <CardContent>
                <Text className="text-2xl font-bold text-primary-500 mb-1">
                  12
                </Text>
                <Text className="text-sm text-gray-600">
                  Projetos Ativos
                </Text>
              </CardContent>
            </Card>
          </View>
        </View>

        {/* Seção de ações rápidas */}
        <Card variant="outlined" padding="lg" margin="none" className="mb-6">
          <CardHeader>
            <Text className="text-lg font-semibold text-gray-900">
              Ações Rápidas
            </Text>
          </CardHeader>
          
          <CardContent>
            <View className="space-y-3">
              <Button
                title="Criar Novo Projeto"
                variant="primary"
                fullWidth
                onPress={() => handleNavigateToDetails('new-project')}
              />
              
              <Button
                title="Ver Relatórios"
                variant="outline"
                fullWidth
                onPress={() => handleNavigateToDetails('reports')}
              />
            </View>
          </CardContent>
        </Card>

        {/* Lista de itens recentes */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Atividades Recentes
          </Text>
          
          {[1, 2, 3].map((item) => (
            <Card
              key={item}
              variant="default"
              padding="md"
              margin="none"
              className="mb-3"
              pressable
              onPress={() => handleNavigateToDetails(`item-${item}`)}
            >
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                  <Avatar
                    name={`Item ${item}`}
                    size="md"
                    backgroundColor={item % 2 === 0 ? Colors.primary : Colors.accent}
                  />
                  <View className="ml-3 flex-1">
                    <Text className="font-medium text-gray-900">
                      Projeto {item}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      Atualizado há {item} hora{item > 1 ? 's' : ''}
                    </Text>
                  </View>
                </View>
                
                <Badge
                  label={item % 2 === 0 ? 'Em Progresso' : 'Concluído'}
                  variant={item % 2 === 0 ? 'warning' : 'success'}
                  size="sm"
                />
              </View>
            </Card>
          ))}
        </View>

        {/* Botão de ação flutuante simulado */}
        <View className="items-center mt-4">
          <Button
            title="Ver Todos os Projetos"
            variant="ghost"
            onPress={() => navigation.navigate('Explore')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

