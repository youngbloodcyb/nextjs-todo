import '../styles/globals.css'
import { TodosProvider } from '../context/TodosContext'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <TodosProvider>
        <Component {...pageProps} />
      </TodosProvider>
    </UserProvider>
  )
}

export default MyApp
