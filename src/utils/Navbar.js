import HomePage from "../components/pages/home"
import PropertiesPage from "../components/pages/properties"
import useId from "../hooks/UseId"
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Sign in page</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign up page</h1>,
    title: "Sign Un",
    path: "/signun",
    private: false,
    hidden: true,
  },
]
