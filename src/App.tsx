import { Provider } from './context/Context'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <Provider>
      <Home />
      <Toaster toastOptions={{ style: { fontSize: 16 } }} />
    </Provider>
  )
}

export default App
