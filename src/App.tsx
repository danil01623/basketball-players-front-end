import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./Pages/Home";
import CreatePlayer from "./Pages/CreatePlayer";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import PlayerPage from "./Pages/PlayerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/create-player", element: <CreatePlayer /> },
      { path: "/player/:playerId", element: <PlayerPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
