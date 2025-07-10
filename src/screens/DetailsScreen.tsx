import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardContent, Button, Badge } from '@/components';
import { RootStackScreenProps } from '@/types/navigation';

type Props = RootStackScreenProps<'Details'>;

export const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id, title } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        <Card variant="elevated" padding="lg" className="mb-6">
          <CardContent>
            <Badge label="Detalhes" variant="primary" size="sm" className="mb-4" />
            <Text className="text-2xl font-bold text-gray-900 mb-4">
              {title}
            </Text>
            <Text className="text-gray-600 mb-4">
              ID: {id}
            </Text>
            <Text className="text-gray-700 leading-6">
              Esta é uma tela de detalhes de exemplo que demonstra como navegar 
              entre telas passando parâmetros. Você pode personalizar esta tela 
              de acordo com suas necessidades específicas.
            </Text>
          </CardContent>
        </Card>

        <Button
          title="Voltar"
          variant="outline"
          fullWidth
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

