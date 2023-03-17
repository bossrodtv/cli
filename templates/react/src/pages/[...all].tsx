import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center gap-2">
      <span className="text-[#000]">Sorry, the page you visited does not exist.</span>
      <button
        className="font-[500] text-[#000] hover:underline"
        onClick={() => navigate(ROUTES.HOME)}
      >
        Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
