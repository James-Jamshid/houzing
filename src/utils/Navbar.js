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
]
