import { createBrowserRouter,} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "abc",
        element: <div>abc</div>,
      }
    ]
  }
]);

export {router}

  

