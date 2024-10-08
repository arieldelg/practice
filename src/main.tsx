import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import { LazyPage2, LazyPage3 } from "./01-lazyload/pages";
import ShoppingPage from "./02-components-patterns/pages/ShoppingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "shopping",
        element: <ShoppingPage />,
      },
      {
        path: "lazy2",
        element: <LazyPage2 />,
      },
      {
        path: "lazy3",
        element: <LazyPage3 />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
