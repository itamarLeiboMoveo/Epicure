import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';

import RootLayout from './Root.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { dataActions } from './store/data-slice.tsx';

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

  const fetchData = async () => {
    try {
      const [restaurants, dishes] = await Promise.all([fetchRestaurants(), fetchDishes()]);
      dispatch(
        dataActions.getData({
          restaurants,
          dishes,
        })
      );
    } catch (error) {
      console.error('Fetching data failed:', error);
    }
  };

  const fetchRestaurants = async () => {
    const response = await fetch('http://localhost:3000/api/v1/restaurants', { method: 'GET' });

    if (!response.ok) {
      throw new Error('Fetching restaurant data failed.');
    }

    const data = await response.json(); // Extract JSON data
    return data;
  };

  const fetchDishes = async () => {
    const response = await fetch('http://localhost:3000/api/v1/dishes', { method: 'GET' });

    if (!response.ok) {
      throw new Error('Fetching dishes data failed.');
    }

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
