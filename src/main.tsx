import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import {
  DynamicFormik,
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormik,
  RegisterPage,
} from "./03-formik/pages";
import "./index.css";

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
      {
        path: "formik-register",
        element: <RegisterFormik />,
      },
      {
        path: "formik-dynamic",
        element: <DynamicFormik />,
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
