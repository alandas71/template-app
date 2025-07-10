import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Card, CardContent, Button } from '@/components';
import { RootStackScreenProps } from '@/types/navigation';

type Props = RootStackScreenProps<'Profile'>;

export const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
  const { userId } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-secondary-500">
      <View className="flex-1 justify-center items-center px-4">
        <Card variant="elevated" padding="xl">
          <CardContent>
            <View className="items-center">
              <Avatar name="João Silva" size="2xl" />
              <Text className="text-xl font-bold text-gray-900 mt-4 mb-2">
                João Silva
              </Text>
              <Text className="text-gray-600 text-center mb-6">
                ID do usuário: {userId}
              </Text>
              <Button
                title="Voltar"
                variant="outline"
                onPress={() => navigation.goBack()}
              />
            </View>
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
};

