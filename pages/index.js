import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Todo from '../components/Todo'
import { table, getMinifiedRecord } from './api/utils/Airtable';
import { TodosContext } from '../context/TodosContext'
import { useEffect, useContext } from 'react'

export default function Home({ initialTodos }) {
  const {todos, setTodos} = useContext(TodosContext);

  useEffect(() => {
    setTodos(initialTodos)
  }, [])

  return (
    <div className='h-screen'>
      <Nav />
      <div className="w-screen h-full font-mono flex flex-col items-center my-10">
        <Link href="/">
          <h1 className='text-center py-4'>Welcome</h1>
        </Link>
          <ul className='flex flex-col gap-3'>
          {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
          </ul>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: getMinifiedRecord(todos)
      }
    }
  } catch(err) {
    console.error(err);
    return {
      props: {
        err: "Something went wrong"
      }
    }
  }
}
