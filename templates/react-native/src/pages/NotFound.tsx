import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { ROUTES } from 'shared/constants/routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <View>
      <Text>Sorry, the page you visited does not exist.</Text>
      <Button title="Back Home" onPress={() => navigate(ROUTES.HOME)} />
    </View>
  );
};

export default NotFoundPage;
