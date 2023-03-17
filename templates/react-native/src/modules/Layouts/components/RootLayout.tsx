import React, { type ReactNode } from 'react';
import { View } from 'react-native';

export const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <View>{children}</View>;
};
