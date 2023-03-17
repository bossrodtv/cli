import { Button } from '@rneui/themed';
import { Footer, Navbar } from 'modules/Partials';
import React, { Suspense } from 'react';
import { Text, View } from 'react-native';
import { Outlet } from 'react-router-native';
import { useUserStore } from 'shared/store';

export const PageLayout: React.FC = () => {
  const logout = useUserStore(state => state.logout);

  const handleLogout = () => logout();

  return (
    <View>
      <Navbar />
      <Suspense fallback={<Text>Loading...</Text>}>
        <Outlet />
      </Suspense>
      <Footer />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
