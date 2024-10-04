import { FormikErrors, useFormik } from "formik";

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

const FormikBasicPage = () => {
  const validate = (values: InitialForm) => {
    const error: FormikErrors<InitialForm> = {};
    if (!values.email) {
      error.email = "Email is required";
    }
    if (!values.password) {
      error.password = "password is required";
    }
    if (values.password.length < 8)
      error.password = "password should be at least 8 characters";
    if (!values.userName) {
      error.userName = "user name is required";
    }
    return error;
  };

  const { values, handleChange, handleSubmit, errors, handleBlur } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });
  return (
    <section className="font-mono font-bold space-y-4 w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl">Formik Basic Page</h1>
      <form
        className="space-y-4 bg-slate-400 p-4 rounded-md ring-2 ring-teal-300 w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="inputAuthContainer">
          <label htmlFor="userName" className="labelAuth">
            User name:
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="name"
            onBlur={handleBlur}
            className="inputAuth"
            onChange={handleChange}
            value={values.userName}
          />
          {errors.userName && (
            <p className="errorInputForm">{errors.userName}</p>
          )}
        </div>
        <div className="inputAuthContainer">
          <label htmlFor="email" className="labelAuth">
            Email:
          </label>
          <input
            type="email"
            name="email"
            onBlur={handleBlur}
            id="email"
            placeholder="example@email.com"
            className="inputAuth"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p className="errorInputForm">{errors.email}</p>}
        </div>
        <div className="inputAuthContainer">
          <label htmlFor="password" className="labelAuth">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onBlur={handleBlur}
            placeholder="password"
            autoComplete="off"
            className="inputAuth"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && (
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

export default FormikBasicPage;
