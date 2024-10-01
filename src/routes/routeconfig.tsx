import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import { RouteInterface } from "../interface/routesInterface";

export const routes: RouteInterface[] = [
  {
    path: "lazy1",
    name: "Lazy 1",
  },
  {
    path: "lazy2",
    name: "Lazy 2",
  },
  {
    path: "lazy3",
    name: "Lazy 3",
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "lazy1",
        lazy: () => import("../01-lazyload/pages/LazyPage1"),
      },
      {
        path: "lazy2",
        lazy: () => import("../01-lazyload/pages/LazyPage2"),
      },
      {
        path: "lazy3",
        lazy: () => import("../01-lazyload/pages/LazyPage3"),
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={"/"} />,
  },
]);
