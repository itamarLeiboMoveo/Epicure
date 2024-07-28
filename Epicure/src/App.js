import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './Root.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { getRestaurants, getDishes, getChefs, getChefOfTheWeek } from './redux/thunks/dataThunk.tsx'

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
    Promise.all([
      dispatch(getRestaurants()),
      dispatch(getDishes()),
      dispatch(getChefs())
    ]).catch((error) => {
      console.error('One or more actions failed', error);
    });
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
