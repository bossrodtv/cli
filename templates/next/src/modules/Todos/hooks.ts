import { useQuery } from '@tanstack/react-query';
import { TodoService } from './services';

/**
 * * queryKey format: /todos?start=0&limit=10 to ['todos', { start: 0, limit: 10 }]
 * * queryKey format: /todos/{id} to ['todos', id]
 */

export const useGetTodos = (params?: { start: number; limit: number }) => {
  return useQuery({
    queryKey: ['todos', params],
    queryFn: () => TodoService.list(params),
  });
};

export const useGetTodo = (id: number | string) => {
  return useQuery({
    queryKey: ['todos', id],
    queryFn: () => TodoService.get(id),
  });
};
