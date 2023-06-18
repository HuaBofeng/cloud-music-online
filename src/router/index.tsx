import Home from "@/routes/home";
import Rank from "@/routes/home/routes/rank";
import Recommend from "@/routes/home/routes/recommend";
import Singers from "@/routes/home/routes/singers";
import NotFound from "@/routes/notFound";
import User from "@/routes/user";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // 访问根路径，重定向到/home
  {
    path: "/",
    element: <Navigate to="/home" />,
  },

  {
    path: "/home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Recommend />,
      },
      {
        path: "singers",
        element: <Singers />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
    ],
  },
  {
    path: "user",
    element: <User />,
  },

  // NotFound
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
