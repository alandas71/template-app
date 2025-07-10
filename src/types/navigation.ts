import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Tipos para Stack Navigator principal
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Profile: { userId: string };
  Settings: undefined;
  Notifications: undefined;
  Search: { query?: string };
  Details: { id: string; title: string };
};

// Tipos para Bottom Tab Navigator
export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Favorites: undefined;
  Account: undefined;
};

// Tipos para Stack Navigator de cada tab
export type HomeStackParamList = {
  HomeScreen: undefined;
  HomeDetails: { id: string };
};

export type ExploreStackParamList = {
  ExploreScreen: undefined;
  ExploreDetails: { category: string };
};

export type FavoritesStackParamList = {
  FavoritesScreen: undefined;
  FavoriteDetails: { itemId: string };
};

export type AccountStackParamList = {
  AccountScreen: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
};

// Props para as telas
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type MainTabScreenProps<T extends keyof MainTabParamList> = BottomTabScreenProps<
  MainTabParamList,
  T
>;

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = StackScreenProps<
  HomeStackParamList,
  T
>;

export type ExploreStackScreenProps<T extends keyof ExploreStackParamList> = StackScreenProps<
  ExploreStackParamList,
  T
>;

export type FavoritesStackScreenProps<T extends keyof FavoritesStackParamList> = StackScreenProps<
  FavoritesStackParamList,
  T
>;

export type AccountStackScreenProps<T extends keyof AccountStackParamList> = StackScreenProps<
  AccountStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

