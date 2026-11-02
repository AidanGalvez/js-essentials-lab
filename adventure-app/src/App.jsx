import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AdventuresPage from './pages/AdventuresPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import AdventureDetailPage from './pages/AdventureDetailPage';
import AboutPage from './pages/AboutPage';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: "/adventures",
          children: [
            {
              index: true,
              element: <AdventuresPage/>
            },
            {
              path: "/adventures/:adventureId",
              element: <AdventureDetailPage/>
            },
          ]
        },
        {
          path: "/about",
          element: <AboutPage/>
        },
      ]
    }
  ])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
