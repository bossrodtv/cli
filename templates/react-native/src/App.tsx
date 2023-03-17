import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageLayout, RootLayout } from 'modules/Layouts';
import { PrivateRoute } from 'modules/Partials';
import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import LoginPage from 'pages/Login';
import NotFoundPage from 'pages/NotFound';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { ROUTES } from 'shared/constants/routes';

const App = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retryDelay: 1250,
            staleTime: 1000 * 60 * 10,
          },
        },
      })
  );
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NativeRouter>
          <RootLayout>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route element={<PageLayout />}>
                  <Route path={ROUTES.HOME} element={<HomePage />} />
                  <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                </Route>
              </Route>
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RootLayout>
        </NativeRouter>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
