import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { ROUTES } from 'shared/constants/routes';

export const Navbar: React.FC = () => {
  return (
    <View>
      <Text>Navbar</Text>
      <Link to={ROUTES.HOME}>
        <Text>Go to Home</Text>
      </Link>
      <Link to={ROUTES.ABOUT}>
        <Text>Go to About</Text>
      </Link>
    </View>
  );
};
