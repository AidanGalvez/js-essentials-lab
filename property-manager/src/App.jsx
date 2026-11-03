import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import PropertiesPage, { propertiesLoader } from './pages/PropertiesPage';
import PropertyDetailPage, { propertyDetailLoader, deletePropertyAction } from './pages/PropertyDetailPage';
import NewPropertyPage from './pages/NewPropertyPage';
import EditPropertyPage from './pages/EditPropertyPage';
import ErrorPage from './pages/ErrorPage';
import { manipulatePropertyAction } from './components/PropertyForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'properties',
        children: [
          {
            index: true,
            element: <PropertiesPage />,
            loader: propertiesLoader,
          },
          {
            path: ':propertyId',
            id: "property-detail",
            loader: propertyDetailLoader,
            children: [
              { 
                index: true, 
                element: <PropertyDetailPage />,
                action: deletePropertyAction
              },
              { 
                path: 'edit', 
                element: <EditPropertyPage />,
                action: manipulatePropertyAction
              },
            ]
          },
          { 
            path: 'new', 
            element: <NewPropertyPage />,
            action: manipulatePropertyAction
          },

        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;