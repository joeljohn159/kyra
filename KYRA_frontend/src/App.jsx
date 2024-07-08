import './App.css'
import router from './utils/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/AuthContext.jsx';

function App() {

  return (
    <>
      <ToastContainer/>
      <AuthProvider ><RouterProvider router={router} /></AuthProvider>
    
      
    </>
  )
}

export default App
