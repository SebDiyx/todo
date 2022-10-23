import { trpc } from '../utils/trpc';

export function TodoList() {
    const { data: todos, isLoading } = trpc.todo.getAll.useQuery();

    return (
        <div className="mb-6 flex w-full justify-center pt-6 text-2xl text-gray-600">
            {isLoading ? (
                <p>Loading...</p>
            ) : todos && todos?.length > 0 ? (
                <div className="align- flex flex-col">
                    {todos.map((todo) => {
                        return <div key={`todo-${todo.id}`}>{todo.title}</div>;
                    })}
                </div>
            ) : (
                <p>No Todos</p>
            )}
        </div>
    );
}
