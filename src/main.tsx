import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import RegisterPage from "./03-formik/pages/RegisterPage";
import FormikBasicPage from "./03-formik/pages/FormikBasicPage";
import FormikYupPage from "./03-formik/pages/FormikYupPage";
import FormikComponents from "./03-formik/pages/FormikComponents";
import FormikAbstract from "./03-formik/pages/FormikAbstract";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "normal_form",
        element: <RegisterPage />,
      },
      {
        path: "formik",
        element: <FormikBasicPage />,
      },
      {
        path: "formik-yup",
        element: <FormikYupPage />,
      },
      {
        path: "formik-components",
        element: <FormikComponents />,
      },
      {
        path: "formik-abstract",
        element: <FormikAbstract />,
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
