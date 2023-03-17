import { TodoService } from 'modules/Todos/services';
import { type Todo } from 'modules/Todos/types';
import {
  type GetStaticPaths,
  type GetStaticProps,
  type GetStaticPropsContext,
  type InferGetStaticPropsType,
} from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const todos = await TodoService.list({ start: 0, limit: 10 });

  const paths = todos.map(todo => ({
    params: { id: todo.id.toString() },
  }));

  /* fallback
    false - Pre-render only the paths based on the api call at build time then return non-existing page to 404
    true - for non-existing page instead of returning 404 it gives you capability to show something using router.isFallback while fetching the data for new generated page. Note: make sure you have revalidate option in the getStaticProps return.
  */

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ todo: Todo }> = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id as string;
  const todo = await TodoService.get(id);

  return {
    props: { todo }, // <todo> object will be passed as props in the component.
    revalidate: 1, // It will update the page every 1 second
  };
};

const TodoPage = ({ todo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Todo {todo.id}</h1>
      <ul>
        <li>ID: {todo.id}</li>
        <li>TODO: {todo.title}</li>
        <li>STATUS: {todo.completed ? 'Done' : 'Pending'}</li>
      </ul>
    </div>
  );
};

export default TodoPage;
