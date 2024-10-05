import { useFormik } from "formik";
import * as Yup from "yup";

interface InitialForm {
  userName: string;
  email: string;
  password: string;
}

const initialValues: InitialForm = {
  userName: "",
  email: "",
  password: "",
};

const FormikYupPage = () => {
  //* Formik hook

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      userName: Yup.string().max(15, "user name max 15 characters").required(),
      password: Yup.string()
        .required()
        .min(8, "password needs to be at least 8 characters"),
      email: Yup.string().email().required(),
    }),
  });

  //* Form
  return (
    <section className="font-mono font-bold space-y-4 w-full flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl">Formik Yup Page</h1>
      <form
        className="space-y-4 bg-slate-400 p-4 rounded-md ring-2 ring-teal-300 w-1/2 h-auto"
        onSubmit={handleSubmit}
      >
        <div className="inputAuthContainer">
          <label htmlFor="userName" className="labelAuth">
            User name:
          </label>
          <input
            type="text"
            placeholder="name"
            className="inputAuth"
            {...getFieldProps("userName")}
          />
          {touched.userName && errors.userName && (
            <p className="errorInputForm">{errors.userName}</p>
          )}
        </div>
        <div className="inputAuthContainer">
          <label htmlFor="email" className="labelAuth">
            Email:
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="inputAuth"
            {...getFieldProps("email")}
          />
          {touched.email && errors.email && (
            <p className="errorInputForm">{errors.email}</p>
          )}
        </div>
        <div className="inputAuthContainer">
          <label htmlFor="password" className="labelAuth">
            Password:
          </label>
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="inputAuth"
            {...getFieldProps("password")}
          />
          {touched.password && errors.password && (
            <p className="errorInputForm">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-200 w-full h-10 rounded-full ring-2 ring-green-400 hover:bg-green-400 hover:ring-green-500 text-xl text-black"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default FormikYupPage;
