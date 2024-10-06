import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

interface InitialValues {
  userName: string;
  email: string;
  password: string;
}

const initialValues: InitialValues = {
  userName: "",
  email: "",
  password: "",
};

const RegisterFormik = () => {
  return (
    <section className="font-mono font-bold space-y-4 w-full flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl">Register Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .required()
            .max(15, "user name can be max 15 characters"),
          email: Yup.string().email().required(),
          password: Yup.string()
            .required()
            .min(8, "password has to be at least 8 characters"),
        })}
      >
        {({ resetForm }) => (
          <Form className="Form">
            <div className="inputAuthContainer">
              <MyTextInput
                id="userName"
                label="Name"
                name="userName"
                placeholder="name"
                type="text"
                onBlur={() => null}
                classNameError="errorInputForm"
                classNameInput="inputAuth"
                classNameLabel="labelAuth"
              />
            </div>
            <div className="inputAuthContainer">
              <MyTextInput
                id="email"
                label="Email"
                name="email"
                placeholder="example@email.com"
                type="email"
                onBlur={() => null}
                classNameError="errorInputForm"
                classNameInput="inputAuth"
                classNameLabel="labelAuth"
              />
            </div>

            <div className="inputAuthContainer">
              <MyTextInput
                id="password"
                label="Password"
                name="password"
                placeholder="password"
                type="password"
                onBlur={() => null}
                classNameError="errorInputForm"
                classNameInput="inputAuth"
                classNameLabel="labelAuth"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="bg-green-200 w-full h-10 rounded-full ring-2 ring-green-400 hover:bg-green-400 hover:ring-green-500 text-xl text-black "
            >
              Create
            </button>
            <button type="button" onClick={() => resetForm()}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default RegisterFormik;
