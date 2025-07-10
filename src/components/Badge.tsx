import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';

interface BaseBadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface BadgeProps extends BaseBadgeProps, ViewProps {
  pressable?: false;
}

interface PressableBadgeProps extends BaseBadgeProps, TouchableOpacityProps {
  pressable: true;
}

type BadgeComponentProps = BadgeProps | PressableBadgeProps;

export const Badge: React.FC<BadgeComponentProps> = ({
  label,
  variant = 'gray',
  size = 'md',
  rounded = true,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const getBadgeClasses = (): string => {
    const baseClasses = 'flex-row items-center justify-center';
    
    const sizeClasses = {
      sm: 'px-2 py-1 min-h-[20px]',
      md: 'px-3 py-1.5 min-h-[24px]',
      lg: 'px-4 py-2 min-h-[28px]',
    };
    
    const variantClasses = {
      primary: 'bg-primary-100 border border-primary-200',
      secondary: 'bg-secondary-100 border border-secondary-200',
      success: 'bg-green-100 border border-green-200',
      warning: 'bg-yellow-100 border border-yellow-200',
      error: 'bg-red-100 border border-red-200',
      info: 'bg-blue-100 border border-blue-200',
      gray: 'bg-gray-100 border border-gray-200',
    };
    
    const roundedClasses = rounded ? 'rounded-full' : 'rounded-md';
    
    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${roundedClasses}`.trim();
  };
  
  const getTextClasses = (): string => {
    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };
    
    const variantClasses = {
      primary: 'text-primary-700',
      secondary: 'text-secondary-700',
      success: 'text-green-700',
      warning: 'text-yellow-700',
      error: 'text-red-700',
      info: 'text-blue-700',
      gray: 'text-gray-700',
    };
    
    return `font-medium ${sizeClasses[size]} ${variantClasses[variant]}`.trim();
  };
  
  const getIconSize = (): number => {
    const sizes = {
      sm: 12,
      md: 14,
      lg: 16,
    };
    return sizes[size];
  };
  
  const getIconColor = (): string => {
    const colors = {
      primary: '#0f766e',
      secondary: '#0f766e',
      success: '#15803d',
      warning: '#a16207',
      error: '#dc2626',
      info: '#2563eb',
      gray: '#374151',
    };
    return colors[variant];
  };
  
  const content = (
    <>
      {leftIcon && (
        <View className="mr-1">
          {React.cloneElement(leftIcon as React.ReactElement, {
            size: getIconSize(),
            color: getIconColor(),
          })}
        </View>
      )}
      <Text className={getTextClasses()}>{label}</Text>
      {rightIcon && (
        <View className="ml-1">
          {React.cloneElement(rightIcon as React.ReactElement, {
            size: getIconSize(),
            color: getIconColor(),
          })}
        </View>
      )}
    </>
  );
  
  if ('pressable' in props && props.pressable) {
    const { pressable, ...touchableProps } = props as PressableBadgeProps;
    return (
      <TouchableOpacity
        className={getBadgeClasses()}
        activeOpacity={0.8}
        {...touchableProps}
      >
        {content}
      </TouchableOpacity>
    );
  }
  
  const { pressable, ...viewProps } = props as BadgeProps;
  return (
    <View className={getBadgeClasses()} {...viewProps}>
      {content}
    </View>
  );
};

// Componente para badge de notificação (dot)
interface NotificationBadgeProps extends ViewProps {
  count?: number;
  showZero?: boolean;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count = 0,
  showZero = false,
  max = 99,
  size = 'md',
  color = '#ef4444',
  style,
  ...props
}) => {
  if (count === 0 && !showZero) {
    return null;
  }
  
  const getSizeClasses = (): { container: string; text: string } => {
    const sizes = {
      sm: { container: 'min-w-[16px] h-4', text: 'text-xs' },
      md: { container: 'min-w-[20px] h-5', text: 'text-xs' },
      lg: { container: 'min-w-[24px] h-6', text: 'text-sm' },
    };
    return sizes[size];
  };
  
  const { container, text } = getSizeClasses();
  const displayCount = count > max ? `${max}+` : count.toString();
  
  return (
    <View
      className={`${container} rounded-full items-center justify-center px-1`}
      style={[{ backgroundColor: color }, style]}
      {...props}
    >
      <Text className={`${text} font-bold text-white`}>
        {displayCount}
      </Text>
    </View>
  );
};

