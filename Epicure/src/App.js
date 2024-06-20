import './App.css';
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import RootLayout from './Root.tsx';

import HomePage from './pages/HomePage/HomePage.tsx';

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
  return <RouterProvider router={router} />;
}

export default App;
