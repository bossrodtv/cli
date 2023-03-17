import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants/Routes';
import { useUserStore } from 'shared/store';

export const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const location = useLocation();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  if (!isSignedIn) return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;

  return children;
};
