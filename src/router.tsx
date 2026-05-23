import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/user/:username",
    element: <UserProfile/>
  },
]);
