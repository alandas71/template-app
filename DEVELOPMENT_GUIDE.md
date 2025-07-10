# Guia de Desenvolvimento

Este guia contém as melhores práticas e convenções para desenvolvimento usando este template React Native com NativeWind.

## 📋 Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (`Button`, `UserCard`)
- **Arquivos de componentes**: PascalCase (`Button.tsx`, `UserCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useAuth`, `useNavigation`)
- **Utilitários**: camelCase (`formatDate`, `validateEmail`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`, `DEFAULT_TIMEOUT`)

### Estrutura de Componentes

```tsx
import React from 'react';
import { View, Text } from 'react-native';

// Tipos/Interfaces primeiro
interface ComponentProps {
  title: string;
  onPress?: () => void;
}

// Componente principal
export const Component: React.FC<ComponentProps> = ({
  title,
  onPress,
}) => {
  // Hooks primeiro
  const [state, setState] = useState();
  
  // Funções auxiliares
  const handlePress = () => {
    onPress?.();
  };
  
  // Render
  return (
    <View className="p-4">
      <Text className="text-lg font-bold">{title}</Text>
    </View>
  );
};
```

## 🎨 Estilização com NativeWind

### Classes Recomendadas

```tsx
// Layout
className="flex-1 flex-row items-center justify-between"

// Spacing
className="p-4 m-2 px-6 py-3"

// Colors (usando nossa paleta)
className="bg-secondary-500 text-white"
className="bg-primary-100 text-primary-700"

// Typography
className="text-lg font-semibold text-gray-900"

// Borders & Shadows
className="rounded-xl border border-gray-200 shadow-md"
```

### Evitar

- Estilos inline quando possível
- Valores hardcoded (use as cores do tema)
- Classes muito específicas (prefira composição)

## 🧭 Navegação

### Tipagem de Navegação

Sempre defina tipos para navegação:

```tsx
// types/navigation.ts
export type StackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: { section?: string };
};

// Na tela
type Props = StackScreenProps<StackParamList, 'Profile'>;
```

### Navegação entre Telas

```tsx
// Navegação simples
navigation.navigate('Home');

// Com parâmetros
navigation.navigate('Profile', { userId: '123' });

// Substituir tela atual
navigation.replace('Login');

// Voltar
navigation.goBack();
```

## 🔧 Componentes Personalizados

### Criando Novos Componentes

1. **Crie o arquivo** em `src/components/`
2. **Defina as interfaces** de props
3. **Implemente o componente** seguindo o padrão
4. **Exporte** no `index.ts`
5. **Documente** o uso

### Exemplo de Componente

```tsx
// src/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface CustomButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'primary',
  onPress,
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg';
  const variantClasses = {
    primary: 'bg-secondary-500',
    secondary: 'bg-primary-500',
  };

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses[variant]}`}
      onPress={onPress}
    >
      <Text className="text-white font-semibold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
```

## 📱 Telas

### Estrutura de Tela

```tsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { ScreenProps } from '@/types/navigation';

type Props = ScreenProps<'ScreenName'>;

export const ScreenName: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4 py-6">
        {/* Conteúdo da tela */}
      </ScrollView>
    </SafeAreaView>
  );
};
```

### Boas Práticas para Telas

- Use `SafeAreaView` para evitar sobreposição
- Implemente loading states
- Trate erros adequadamente
- Use `ScrollView` para conteúdo longo
- Mantenha a lógica separada em hooks

## 🎯 Estado e Hooks

### Hooks Personalizados

```tsx
// src/hooks/useCounter.ts
import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
};
```

### Gerenciamento de Estado

Para estado local: `useState`, `useReducer`
Para estado global: Context API ou bibliotecas como Zustand

## 🔍 Debugging

### React Native Debugger

1. Instale o React Native Debugger
2. Execute `npm start`
3. Pressione `Cmd+D` (iOS) ou `Ctrl+M` (Android)
4. Selecione "Debug"

### Flipper

Configure o Flipper para debugging avançado:
- Network inspector
- Layout inspector
- Logs

## 🧪 Testes

### Estrutura de Testes

```tsx
// __tests__/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@/components';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button title="Test Button" onPress={() => {}} />
    );
    
    expect(getByText('Test Button')).toBeTruthy();
  });
  
  it('calls onPress when pressed', () => {
    const mockPress = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={mockPress} />
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(mockPress).toHaveBeenCalled();
  });
});
```

## 📦 Adicionando Dependências

### Dependências Nativas

1. Instale via npm/yarn
2. Execute `cd ios && pod install` (iOS)
3. Rebuild o projeto

### Dependências JavaScript

```bash
npm install package-name
# ou
yarn add package-name
```

## 🚀 Build e Deploy

### Android

```bash
# Debug
npm run android

# Release
cd android
./gradlew assembleRelease
```

### iOS

```bash
# Debug
npm run ios

# Release (via Xcode)
# Abra ios/ProjectName.xcworkspace no Xcode
# Product > Archive
```

## 📋 Checklist de Qualidade

Antes de fazer commit:

- [ ] Código segue as convenções
- [ ] Componentes são tipados
- [ ] Não há warnings no console
- [ ] Testes passam
- [ ] ESLint não reporta erros
- [ ] TypeScript compila sem erros
- [ ] App funciona em ambas as plataformas

## 🔧 Troubleshooting

### Problemas Comuns

**Metro bundler não inicia**
```bash
npx react-native start --reset-cache
```

**Erro de pods (iOS)**
```bash
cd ios && pod deintegrate && pod install
```

**Erro de build Android**
```bash
cd android && ./gradlew clean
```

**NativeWind não funciona**
- Verifique se o babel.config.js está correto
- Reinicie o Metro bundler
- Limpe o cache

## 📚 Recursos Úteis

- [React Native Docs](https://reactnative.dev/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [React Navigation Docs](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

Mantenha o código limpo, testado e documentado!

