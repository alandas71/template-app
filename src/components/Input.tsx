import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { Colors } from '@/constants/colors';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  variant = 'outline',
  size = 'md',
  required = false,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const getContainerClasses = (): string => {
    const baseClasses = 'flex-row items-center rounded-xl';
    
    const sizeClasses = {
      sm: 'px-3 py-2 min-h-[36px]',
      md: 'px-4 py-3 min-h-[44px]',
      lg: 'px-5 py-4 min-h-[52px]',
    };
    
    const variantClasses = {
      default: 'border-b border-gray-300',
      filled: 'bg-gray-100',
      outline: 'border border-gray-300',
    };
    
    const focusClasses = isFocused ? {
      default: 'border-secondary-500',
      filled: 'bg-gray-50 border border-secondary-500',
      outline: 'border-secondary-500',
    } : {};
    
    const errorClasses = error ? 'border-red-500' : '';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${focusClasses[variant] || ''} ${errorClasses}`.trim();
  };
  
  const getTextClasses = (): string => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };
    
    return `flex-1 text-gray-900 ${sizeClasses[size]}`.trim();
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
    <View className="w-full">
      {label && (
        <View className="flex-row items-center mb-2">
          <Text className="text-gray-700 font-medium text-sm">
            {label}
          </Text>
          {required && (
            <Text className="text-red-500 ml-1">*</Text>
          )}
        </View>
      )}
      
      <View className={getContainerClasses()}>
        {leftIcon && (
          <View className="mr-3">
            {React.cloneElement(leftIcon as React.ReactElement, {
              size: getIconSize(),
              color: isFocused ? Colors.secondary : Colors.gray400,
            })}
          </View>
        )}
        
        <TextInput
          className={getTextClasses()}
          placeholderTextColor={Colors.gray400}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={style}
          {...props}
        />
        
        {rightIcon && (
          <TouchableOpacity className="ml-3">
            {React.cloneElement(rightIcon as React.ReactElement, {
              size: getIconSize(),
              color: Colors.gray400,
            })}
          </TouchableOpacity>
        )}
      </View>
      
      {(error || hint) && (
        <View className="mt-1">
          {error ? (
            <Text className="text-red-500 text-xs">{error}</Text>
          ) : hint ? (
            <Text className="text-gray-500 text-xs">{hint}</Text>
          ) : null}
        </View>
      )}
    </View>
  );
};

