import React from 'react';
import {
  View,
  TouchableOpacity,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';

interface BaseCardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

interface CardProps extends BaseCardProps, ViewProps {
  pressable?: false;
}

interface PressableCardProps extends BaseCardProps, TouchableOpacityProps {
  pressable: true;
}

type CardComponentProps = CardProps | PressableCardProps;

export const Card: React.FC<CardComponentProps> = ({
  variant = 'default',
  padding = 'md',
  margin = 'none',
  rounded = 'xl',
  children,
  ...props
}) => {
  const getCardClasses = (): string => {
    const baseClasses = 'bg-white';
    
    const variantClasses = {
      default: '',
      elevated: 'shadow-md',
      outlined: 'border border-gray-200',
    };
    
    const paddingClasses = {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    };
    
    const marginClasses = {
      none: '',
      sm: 'm-2',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
    };
    
    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${marginClasses[margin]} ${roundedClasses[rounded]}`.trim();
  };
  
  if ('pressable' in props && props.pressable) {
    const { pressable, ...touchableProps } = props as PressableCardProps;
    return (
      <TouchableOpacity
        className={getCardClasses()}
        activeOpacity={0.8}
        {...touchableProps}
      >
        {children}
      </TouchableOpacity>
    );
  }
  
  const { pressable, ...viewProps } = props as CardProps;
  return (
    <View className={getCardClasses()} {...viewProps}>
      {children}
    </View>
  );
};

// Componentes auxiliares para estruturar o Card
export const CardHeader: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View className="mb-4" style={style} {...props}>
    {children}
  </View>
);

export const CardContent: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View className="flex-1" style={style} {...props}>
    {children}
  </View>
);

export const CardFooter: React.FC<ViewProps> = ({ children, style, ...props }) => (
  <View className="mt-4 flex-row justify-end" style={style} {...props}>
    {children}
  </View>
);

