import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardContent, Button } from '@/components';
import { FavoritesStackScreenProps } from '@/types/navigation';

type Props = FavoritesStackScreenProps<'FavoritesScreen'>;

export const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 justify-center items-center px-4">
        <Card variant="elevated" padding="xl">
          <CardContent>
            <View className="items-center">
              <Text style={{ fontSize: 48, marginBottom: 16 }}>❤️</Text>
              <Text className="text-xl font-bold text-gray-900 mb-2 text-center">
                Seus Favoritos
              </Text>
              <Text className="text-gray-600 text-center mb-6">
                Aqui você encontrará todos os itens que marcou como favoritos
              </Text>
              <Button
                title="Explorar Conteúdo"
                variant="primary"
                onPress={() => navigation.navigate('Explore')}
              />
            </View>
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
};

