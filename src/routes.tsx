import { createBrowserRouter,} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./Layout";
import Activity from "./pages/activity/Activity";

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
        path: "activity",
        element: <Activity />,
      }
    ]
  }
]);

export {router}

  

