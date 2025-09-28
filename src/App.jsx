import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/project", element: <Project /> },
        { path: "/services", element: <Services /> },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
