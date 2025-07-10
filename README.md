# React Native NativeWind Template

Um template completo para aplicativos React Native usando NativeWind (TailwindCSS) com componentes personalizados, navegação estruturada e melhores práticas de desenvolvimento.

## 🎨 Paleta de Cores

Este template utiliza uma paleta de cores personalizada baseada em tons de verde-azulado:

- **Primary**: `#35E1CB` - Cor principal clara
- **Secondary**: `#008276` - Cor principal média  
- **Accent**: `#085B51` - Cor principal escura

## 🚀 Características

- ✅ **React Native 0.72.6** com TypeScript
- ✅ **NativeWind 2.0** para estilização com TailwindCSS
- ✅ **React Navigation 6** com navegação em abas e stack
- ✅ **Componentes personalizados** com design system consistente
- ✅ **Estrutura de pastas organizada** seguindo melhores práticas
- ✅ **Tipagem TypeScript completa** para navegação e componentes
- ✅ **Configuração otimizada** para desenvolvimento e produção
- ✅ **Telas de exemplo** demonstrando uso dos componentes

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx      # Botão personalizado
│   ├── Input.tsx       # Campo de entrada
│   ├── Card.tsx        # Container de conteúdo
│   ├── Avatar.tsx      # Avatar de usuário
│   ├── Badge.tsx       # Badges e notificações
│   └── index.ts        # Exportações
├── screens/            # Telas do aplicativo
│   ├── HomeScreen.tsx  # Tela inicial
│   ├── ExploreScreen.tsx # Tela de exploração
│   ├── AccountScreen.tsx # Tela de conta
│   └── ...
├── navigation/         # Configuração de navegação
│   ├── RootNavigator.tsx
│   ├── MainTabNavigator.tsx
│   └── ...
├── types/             # Definições de tipos
│   ├── navigation.ts  # Tipos de navegação
│   └── nativewind.d.ts # Tipos do NativeWind
├── constants/         # Constantes do app
│   └── colors.ts      # Paleta de cores
├── hooks/             # Hooks personalizados
├── utils/             # Utilitários
└── ...
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js 16+
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS)

### Passos

1. **Clone ou baixe este template**
```bash
git clone <repository-url>
cd react-native-nativewind-template
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure o ambiente iOS (apenas macOS)**
```bash
cd ios && pod install && cd ..
```

4. **Execute o aplicativo**
```bash
# Android
npm run android

# iOS
npm run ios

# Metro bundler
npm start
```

## 🎯 Componentes Disponíveis

### Button
Botão personalizado com múltiplas variações e tamanhos.

```tsx
import { Button } from '@/components';

<Button
  title="Clique aqui"
  variant="primary"
  size="md"
  onPress={() => console.log('Pressed')}
/>
```

**Variações**: `primary`, `secondary`, `outline`, `ghost`
**Tamanhos**: `sm`, `md`, `lg`

### Input
Campo de entrada com suporte a ícones e validação.

```tsx
import { Input } from '@/components';

<Input
  label="Email"
  placeholder="Digite seu email"
  variant="outline"
  leftIcon={<EmailIcon />}
  error="Email inválido"
/>
```

### Card
Container flexível para organizar conteúdo.

```tsx
import { Card, CardHeader, CardContent } from '@/components';

<Card variant="elevated" padding="lg">
  <CardHeader>
    <Text>Título</Text>
  </CardHeader>
  <CardContent>
    <Text>Conteúdo do card</Text>
  </CardContent>
</Card>
```

### Avatar
Componente para exibir fotos de perfil ou iniciais.

```tsx
import { Avatar } from '@/components';

<Avatar
  name="João Silva"
  size="lg"
  source={{ uri: 'https://...' }}
  pressable
  onPress={() => {}}
/>
```

### Badge
Labels e indicadores de status.

```tsx
import { Badge, NotificationBadge } from '@/components';

<Badge label="Novo" variant="primary" />
<NotificationBadge count={5} />
```

## 🧭 Navegação

O template inclui uma estrutura de navegação completa:

- **RootNavigator**: Navegação principal em stack
- **MainTabNavigator**: Navegação em abas (Home, Explore, Favorites, Account)
- **Stack Navigators**: Para cada aba principal

### Exemplo de navegação

```tsx
// Navegar para uma tela
navigation.navigate('Profile', { userId: '123' });

// Navegar entre abas
navigation.navigate('Explore');

// Voltar
navigation.goBack();
```

## 🎨 Personalização de Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#35E1CB', // Sua cor principal
        // ... outras variações
      },
      // ... outras cores
    }
  }
}
```

## 📱 Telas de Exemplo

O template inclui telas funcionais que demonstram:

- **HomeScreen**: Dashboard com estatísticas e ações rápidas
- **ExploreScreen**: Lista de categorias e busca
- **AccountScreen**: Perfil do usuário e configurações
- **Telas de detalhes**: Navegação com parâmetros

## 🔧 Scripts Disponíveis

```bash
npm run android      # Executar no Android
npm run ios          # Executar no iOS
npm start           # Iniciar Metro bundler
npm run lint        # Verificar código
npm run type-check  # Verificar tipos TypeScript
```

## 📋 Melhores Práticas Implementadas

### Estrutura de Código
- Separação clara de responsabilidades
- Componentes reutilizáveis e tipados
- Hooks personalizados para lógica compartilhada
- Constantes centralizadas

### Estilização
- Design system consistente
- Uso de TailwindCSS para produtividade
- Componentes responsivos
- Paleta de cores padronizada

### Navegação
- Tipagem completa para navegação
- Estrutura hierárquica clara
- Parâmetros tipados entre telas
- Configuração centralizada

### TypeScript
- Tipagem estrita habilitada
- Interfaces bem definidas
- Tipos de navegação completos
- IntelliSense otimizado

## 🚀 Próximos Passos

Após configurar o template, você pode:

1. **Personalizar as cores** no `tailwind.config.js`
2. **Adicionar novos componentes** na pasta `src/components`
3. **Criar novas telas** seguindo a estrutura existente
4. **Implementar autenticação** e estado global
5. **Adicionar APIs** e gerenciamento de dados
6. **Configurar push notifications**
7. **Implementar testes** unitários e de integração

## 📚 Recursos Adicionais

- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades!

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

