import './Assets/styles/index.css';
import './Assets/styles/typography.css';

import {
  createBrowserRouter,
  RouterProvider } from "react-router-dom";

import './Assets/styles/pages/home.css';
import './Assets/styles/pages/details.css';

import './Assets/styles/abstract/utilities.css';

import './Assets/styles/components/header.css';
import './Assets/styles/components/moviecard.css';

import Home from './pages/Home';
import Details from './pages/Details';

import Header from './components/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:"/details/:id",
      element:<Details/>
    }
  ]);
  return (
    <div className="app">
      <Header/>
      <RouterProvider router={router} />
        
        {/* <Test/> */}
    </div>
  );
}

export default App;
