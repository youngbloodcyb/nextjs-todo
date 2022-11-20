import '../styles/globals.css'
import { TodosProvider } from '../context/TodosContext'

function MyApp({ Component, pageProps }) {
  return (
    <TodosProvider>
      <Component {...pageProps} />
    </TodosProvider>
  )
}

export default MyApp
