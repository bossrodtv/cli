import { useQuery } from '@tanstack/react-query';

export const useGetTodos = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      return response.json();
    },
  });
