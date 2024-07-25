import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './Root.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { setRestaurants, setDishes, setChefs, setChefOfTheWeek } from './redux/thunks/dataThunk.tsx'

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ]
  }
]);

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants());
    dispatch(setDishes());
    dispatch(setChefs());
    dispatch(setChefOfTheWeek());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
