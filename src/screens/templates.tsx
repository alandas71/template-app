import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardContent, Button } from '@/components';

// Template básico para telas simples
const BasicScreenTemplate: React.FC<{
  title: string;
  description: string;
  emoji: string;
  onBack?: () => void;
}> = ({ title, description, emoji, onBack }) => (
  <SafeAreaView className="flex-1 bg-gray-50">
    <View className="flex-1 justify-center items-center px-4">
      <Card variant="elevated" padding="xl">
        <CardContent>
          <View className="items-center">
            <Text style={{ fontSize: 48, marginBottom: 16 }}>{emoji}</Text>
            <Text className="text-xl font-bold text-gray-900 mb-2 text-center">
              {title}
            </Text>
            <Text className="text-gray-600 text-center mb-6">
              {description}
            </Text>
            {onBack && (
              <Button
                title="Voltar"
                variant="outline"
                onPress={onBack}
              />
            )}
          </View>
        </CardContent>
      </Card>
    </View>
  </SafeAreaView>
);

// Exportar templates para as telas
export const SettingsScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Configurações"
    description="Aqui você pode personalizar as configurações do aplicativo"
    emoji="⚙️"
    onBack={() => navigation.goBack()}
  />
);

export const NotificationsScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Notificações"
    description="Gerencie suas notificações e alertas"
    emoji="🔔"
    onBack={() => navigation.goBack()}
  />
);

export const SearchScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Buscar"
    description="Encontre o que você está procurando"
    emoji="🔍"
    onBack={() => navigation.goBack()}
  />
);

export const HomeDetailsScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Detalhes do Home"
    description="Informações detalhadas do item selecionado"
    emoji="🏠"
    onBack={() => navigation.goBack()}
  />
);

export const ExploreDetailsScreen = ({ navigation, route }: any) => (
  <BasicScreenTemplate
    title={`Categoria: ${route.params?.category || 'Desconhecida'}`}
    description="Explore itens desta categoria específica"
    emoji="🔍"
    onBack={() => navigation.goBack()}
  />
);

export const FavoriteDetailsScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Detalhes do Favorito"
    description="Informações sobre o item favorito selecionado"
    emoji="❤️"
    onBack={() => navigation.goBack()}
  />
);

export const EditProfileScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Editar Perfil"
    description="Atualize suas informações pessoais"
    emoji="👤"
    onBack={() => navigation.goBack()}
  />
);

export const ChangePasswordScreen = ({ navigation }: any) => (
  <BasicScreenTemplate
    title="Alterar Senha"
    description="Mantenha sua conta segura com uma nova senha"
    emoji="🔒"
    onBack={() => navigation.goBack()}
  />
);

