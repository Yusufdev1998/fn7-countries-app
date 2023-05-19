import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/country/:name",
    element: <SingleCountry></SingleCountry>,
  },
]);
const App = () => {
  return (
    <div className="bg-white app text-[var(--text-color)] dark:text-white  dark:bg-[#202C36]">
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
