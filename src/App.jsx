import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import Shop from "./pages/shop/Shop";
import Provider from './context/Context';
import Cart from './pages/cart/Cart';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/cart",
    element: <Cart/>
  }
])
function App() {
  return (
    <>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App
