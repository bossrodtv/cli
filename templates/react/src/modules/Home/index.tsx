import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';
import { useUserStore } from 'shared/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const logout = useUserStore(state => state.logout);

  const handleLogout = () => logout();

  return (
    <div>
      This is HomePage. <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate(ROUTES.ABOUT)}>Go to About</button>
    </div>
  );
};

export default Home;
