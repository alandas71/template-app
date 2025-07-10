import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageProps,
  TouchableOpacityProps,
} from 'react-native';
import { Colors } from '@/constants/colors';

interface BaseAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  name?: string;
  source?: ImageProps['source'];
  backgroundColor?: string;
  textColor?: string;
  showBorder?: boolean;
  borderColor?: string;
}

interface AvatarProps extends BaseAvatarProps {
  pressable?: false;
}

interface PressableAvatarProps extends BaseAvatarProps, TouchableOpacityProps {
  pressable: true;
}

type AvatarComponentProps = AvatarProps | PressableAvatarProps;

export const Avatar: React.FC<AvatarComponentProps> = ({
  size = 'md',
  name,
  source,
  backgroundColor = Colors.secondary,
  textColor = Colors.white,
  showBorder = false,
  borderColor = Colors.white,
  ...props
}) => {
  const getSizeClasses = (): { container: string; text: string; dimensions: number } => {
    const sizes = {
      xs: { container: 'w-6 h-6', text: 'text-xs', dimensions: 24 },
      sm: { container: 'w-8 h-8', text: 'text-sm', dimensions: 32 },
      md: { container: 'w-12 h-12', text: 'text-base', dimensions: 48 },
      lg: { container: 'w-16 h-16', text: 'text-lg', dimensions: 64 },
      xl: { container: 'w-20 h-20', text: 'text-xl', dimensions: 80 },
      '2xl': { container: 'w-24 h-24', text: 'text-2xl', dimensions: 96 },
    };
    return sizes[size];
  };
  
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };
  
  const { container, text, dimensions } = getSizeClasses();
  
  const containerClasses = `${container} rounded-full items-center justify-center ${
    showBorder ? 'border-2' : ''
  }`.trim();
  
  const containerStyle = {
    backgroundColor: source ? 'transparent' : backgroundColor,
    borderColor: showBorder ? borderColor : 'transparent',
  };
  
  const content = (
    <View className={containerClasses} style={containerStyle}>
      {source ? (
        <Image
          source={source}
          className={`${container} rounded-full`}
          style={{ width: dimensions, height: dimensions }}
          resizeMode="cover"
        />
      ) : (
        <Text
          className={`${text} font-semibold`}
          style={{ color: textColor }}
        >
          {name ? getInitials(name) : '?'}
        </Text>
      )}
    </View>
  );
  
  if ('pressable' in props && props.pressable) {
    const { pressable, ...touchableProps } = props as PressableAvatarProps;
    return (
      <TouchableOpacity activeOpacity={0.8} {...touchableProps}>
        {content}
      </TouchableOpacity>
    );
  }
  
  return content;
};

// Componente para grupo de avatares
interface AvatarGroupProps {
  avatars: Array<{
    name?: string;
    source?: ImageProps['source'];
    backgroundColor?: string;
  }>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  max?: number;
  spacing?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  size = 'md',
  max = 4,
  spacing = -8,
}) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;
  
  return (
    <View className="flex-row items-center">
      {visibleAvatars.map((avatar, index) => (
        <View
          key={index}
          style={{
            marginLeft: index > 0 ? spacing : 0,
            zIndex: visibleAvatars.length - index,
          }}
        >
          <Avatar
            size={size}
            name={avatar.name}
            source={avatar.source}
            backgroundColor={avatar.backgroundColor}
            showBorder
            borderColor={Colors.white}
          />
        </View>
      ))}
      
      {remainingCount > 0 && (
        <View
          style={{
            marginLeft: spacing,
            zIndex: 0,
          }}
        >
          <Avatar
            size={size}
            name={`+${remainingCount}`}
            backgroundColor={Colors.gray400}
            showBorder
            borderColor={Colors.white}
          />
        </View>
      )}
    </View>
  );
};

