import type { NextPage } from 'next';
import Head from 'next/head';
import { CreateTodo } from './CreateTodo';
import { TodoList } from './TodoList';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Todo List</title>
                <meta name="description" content="List of things todo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto flex min-h-screen flex-col items-center p-4 font-extrabold">
                <h1 className="text-5xl leading-normal text-cyan-900 md:text-[5rem]">Todo List</h1>
                <TodoList />
                <CreateTodo />
            </main>
        </>
    );
};

export default Home;
