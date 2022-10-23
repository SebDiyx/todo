import { FormEvent, useEffect, useState } from 'react';
import { trpc } from '../utils/trpc';

export function CreateTodo() {
    const trpcUtils = trpc.useContext();

    const { mutate: createTodo, isLoading } = trpc.todo.createTodo.useMutation({
        onSuccess: () => {
            trpcUtils.todo.getAll.invalidate();
        },
    });
    const [title, setTitle] = useState('');

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        createTodo({ title });
        setTitle('');
    }

    return (
        <form onSubmit={onSubmit} className="font-bold">
            <input
                className="mr-2 rounded-md border-2 border-blue-100 p-1 focus:border-2 focus:border-blue-300 focus:outline-none"
                value={title}
                onChange={(e) => {
                    setTitle(e.currentTarget.value);
                }}
                required
            />

            <button type="submit" className="rounded-2xl bg-cyan-700 p-1 px-4 text-white">
                {!isLoading ? 'Submit' : 'Loading'}
            </button>
        </form>
    );
}
