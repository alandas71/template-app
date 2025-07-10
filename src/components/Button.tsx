import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Colors } from '@/constants/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  style,
  ...props
}) => {
  const getButtonClasses = (): string => {
    const baseClasses = 'flex-row items-center justify-center rounded-xl';
    const widthClasses = fullWidth ? 'w-full' : '';
    
    const sizeClasses = {
      sm: 'px-4 py-2 min-h-[36px]',
      md: 'px-6 py-3 min-h-[44px]',
      lg: 'px-8 py-4 min-h-[52px]',
    };
    
    const variantClasses = {
      primary: 'bg-secondary-500 active:bg-secondary-600',
      secondary: 'bg-primary-500 active:bg-primary-600',
      outline: 'border-2 border-secondary-500 bg-transparent active:bg-secondary-50',
      ghost: 'bg-transparent active:bg-gray-100',
    };
    
    const disabledClasses = disabled || loading ? 'opacity-50' : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${disabledClasses}`.trim();
  };
  
  const getTextClasses = (): string => {
    const baseClasses = 'font-semibold text-center';
    
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    
    const variantClasses = {
      primary: 'text-white',
      secondary: 'text-white',
      outline: 'text-secondary-500',
      ghost: 'text-secondary-500',
    };
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`.trim();
  };
  
  const getIconSize = (): number => {
    const sizes = {
      sm: 16,
      md: 20,
      lg: 24,
    };
    return sizes[size];
  };
  
  return (
    <TouchableOpacity
      className={getButtonClasses()}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={style}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? Colors.secondary : Colors.white}
        />
      ) : (
        <>
          {leftIcon && (
            <React.cloneElement(leftIcon as React.ReactElement, {
              size: getIconSize(),
              style: { marginRight: 8 },
            })
          )}
          <Text className={getTextClasses()}>{title}</Text>
          {rightIcon && (
            <React.cloneElement(rightIcon as React.ReactElement, {
              size: getIconSize(),
              style: { marginLeft: 8 },
            })
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

