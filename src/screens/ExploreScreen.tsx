import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Input,
  Card,
  CardContent,
  Badge,
  Button,
} from '@/components';
import { ExploreStackScreenProps } from '@/types/navigation';

type Props = ExploreStackScreenProps<'ExploreScreen'>;

const categories = [
  { id: '1', name: 'Tecnologia', count: 45, color: 'primary' as const },
  { id: '2', name: 'Design', count: 32, color: 'secondary' as const },
  { id: '3', name: 'Marketing', count: 28, color: 'success' as const },
  { id: '4', name: 'Vendas', count: 19, color: 'warning' as const },
  { id: '5', name: 'Recursos Humanos', count: 15, color: 'info' as const },
  { id: '6', name: 'Finanças', count: 12, color: 'error' as const },
];

const featuredItems = [
  {
    id: '1',
    title: 'Desenvolvimento Mobile',
    description: 'Aprenda a criar aplicativos incríveis com React Native',
    category: 'Tecnologia',
    featured: true,
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Princípios fundamentais de design de interface',
    category: 'Design',
    featured: true,
  },
  {
    id: '3',
    title: 'Marketing Digital',
    description: 'Estratégias modernas de marketing online',
    category: 'Marketing',
    featured: false,
  },
];

export const ExploreScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryPress = (category: string) => {
    navigation.navigate('ExploreDetails', { category });
  };

  const handleSearch = () => {
    navigation.navigate('Search', { query: searchQuery });
  };

  const renderCategoryItem = ({ item }: { item: typeof categories[0] }) => (
    <Card
      variant="outlined"
      padding="md"
      margin="none"
      className="mr-3 min-w-[120px]"
      pressable
      onPress={() => handleCategoryPress(item.name)}
    >
      <CardContent>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-900 mb-1">
            {item.count}
          </Text>
          <Text className="text-sm text-gray-600 text-center">
            {item.name}
          </Text>
        </View>
      </CardContent>
    </Card>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header com busca */}
        <View className="px-4 py-6">
          <Text className="text-2xl font-bold text-gray-900 mb-2">
            Explorar
          </Text>
          <Text className="text-gray-600 mb-4">
            Descubra novos conteúdos e categorias
          </Text>
          
          <Input
            placeholder="Buscar por categoria ou conteúdo..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            variant="filled"
            rightIcon={<Text>🔍</Text>}
            onSubmitEditing={handleSearch}
          />
        </View>

        {/* Categorias horizontais */}
        <View className="mb-6">
          <Text className="text-lg font-semibold text-gray-900 px-4 mb-4">
            Categorias
          </Text>
          
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>

        {/* Conteúdo em destaque */}
        <View className="px-4 mb-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Em Destaque
          </Text>
          
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              variant="elevated"
              padding="lg"
              margin="none"
              className="mb-4"
              pressable
              onPress={() => navigation.navigate('Details', {
                id: item.id,
                title: item.title,
              })}
            >
              <CardContent>
                <View className="flex-row items-start justify-between mb-3">
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-gray-600 mb-3">
                      {item.description}
                    </Text>
                  </View>
                  
                  {item.featured && (
                    <Badge
                      label="Destaque"
                      variant="primary"
                      size="sm"
                    />
                  )}
                </View>
                
                <View className="flex-row items-center justify-between">
                  <Badge
                    label={item.category}
                    variant="secondary"
                    size="sm"
                  />
                  
                  <Button
                    title="Ver Mais"
                    variant="ghost"
                    size="sm"
                    onPress={() => navigation.navigate('Details', {
                      id: item.id,
                      title: item.title,
                    })}
                  />
                </View>
              </CardContent>
            </Card>
          ))}
        </View>

        {/* Ação para ver todas as categorias */}
        <View className="px-4 pb-6">
          <Button
            title="Ver Todas as Categorias"
            variant="outline"
            fullWidth
            onPress={() => handleCategoryPress('Todas')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

