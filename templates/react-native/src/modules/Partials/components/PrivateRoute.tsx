import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-native';
import { ROUTES } from 'shared/constants/routes';
import { useUserStore } from 'shared/store';

export const PrivateRoute: React.FC = () => {
  const location = useLocation();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return <Outlet />;
};
