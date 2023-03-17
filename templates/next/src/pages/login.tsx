import Login from 'modules/Login';
import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTES } from 'shared/constants/routes';
import { useUserStore } from 'shared/store';

const LoginPage: NextPage = () => {
  const { push: navigate } = useRouter();
  const isSignedIn = useUserStore(state => state.computed.isSignedIn);

  useEffect(() => {
    if (isSignedIn) void navigate(ROUTES.HOME);
  }, [isSignedIn, navigate]);

  if (isSignedIn) return null;

  return <Login />;
};

export default LoginPage;
