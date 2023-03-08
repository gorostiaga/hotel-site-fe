import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from './pages/ErrorPage'; 
import HomePage from './pages/HomePage'; 
import RoomsPage, {loader as roomLoader} from './pages/RoomsPage';
import RoomDetailsPage, {loader as roomDetailLoader} from "./pages/RoomDetailsPage";
import {action as bookingRoomAction} from './components/BookingForm';
import PaymentPage from "./pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true, element: <HomePage /> 
      },
      {
        path: 'rooms',        
        children: [
          {
            index: true,
            element: <RoomsPage />,
            loader: roomLoader, 
          },
          {
            path: ':roomId',
            element: <RoomDetailsPage />,
            id: 'room-details',
            loader: roomDetailLoader,
            action: bookingRoomAction,
          }
        ]
      },
      {
        path: '/payment/:userId/:roomId',
        element: <PaymentPage />,
         
      }

    ]
  }
]);

function App() {
  return <RouterProvider router={router} /> 
}

export default App;
