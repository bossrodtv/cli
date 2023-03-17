import { useGetTodos } from 'modules/Todos/hooks';
import { type NextPage } from 'next';
import React from 'react';

const CSRPage: NextPage = () => {
  const params = { start: 0, limit: 10 };

  const { data: todos = [], isLoading } = useGetTodos(params);

  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <h1>CSR Page</h1>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="grid grid-cols-[5vw_40vw_auto] items-center">
            <span>{todo.id}</span>
            <span>{todo.title}</span>
            <span>{todo.completed ? 'Done' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default CSRPage;
