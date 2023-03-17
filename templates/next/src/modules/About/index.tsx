import { useRouter } from 'next/router';
import React from 'react';
import { ROUTES } from 'shared/constants/routes';
import { useUserStore } from 'shared/store';

const About: React.FC = () => {
  const { push: navigate } = useRouter();
  const logout = useUserStore(state => state.logout);

  const handleLogout = () => logout();

  return (
    <div>
      This is AboutPage. <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate(ROUTES.HOME)}>Go to Home</button>
    </div>
  );
};

export default About;
