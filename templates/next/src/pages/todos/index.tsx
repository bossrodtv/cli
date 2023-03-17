import { TodoService } from 'modules/Todos/services';
import { type Todo } from 'modules/Todos/types';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';

export const getStaticProps: GetStaticProps<{ todos: Todo[] }> = async () => {
  const todos = await TodoService.list({ start: 0, limit: 10 });

  return {
    props: { todos }, // todos object will be pass as props in the component.
  };
};

const TodosPage = ({ todos }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <React.Fragment>
      <h1>Todos Page</h1>

      <ul>
        {todos.map(todo => (
          <Link key={todo.id} href={`/todos/${todo.id}`}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '5vw 40vw auto',
                alignItems: 'center',
                cursor: 'pointer',
                padding: 10,
              }}
            >
              <span>{todo.id}</span>
              <span>{todo.title}</span>
              <span>{todo.completed ? 'Done' : 'Pending'}</span>
            </div>
          </Link>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodosPage;
