import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface InitialForm {
  userName: string;
  email: string;
  password: string;
  terms: boolean;
  jobType: string;
}

const initialValues: InitialForm = {
  userName: "",
  email: "",
  password: "",
  terms: false,
  jobType: "",
};

const FormikComponents = () => {
  //* Form
  return (
    <section className="font-mono font-bold space-y-4 w-full flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl">Formik Components Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, "user name max 15 characters")
            .required(),
          password: Yup.string()
            .required()
            .min(8, "password needs to be at least 8 characters"),
          email: Yup.string().email().required(),
          terms: Yup.boolean()
            .required()
            .oneOf([true], "Please accept terms and conditions"),
          jobType: Yup.string().required(),
        })}
      >
        {() => (
          <Form className="space-y-4 bg-slate-400 p-4 rounded-md ring-2 ring-teal-300 w-1/2 h-auto lg:max-w-xl">
            <div className="inputAuthContainer">
              <label htmlFor="userName" className="labelAuth">
                User name:
              </label>
              <Field
                type="text"
                placeholder="name"
                className="inputAuth"
                name="userName"
                id="userName"
                onBlur={() => null}
              />
              <ErrorMessage
                name="userName"
                className="errorInputForm"
                component="span"
              />
            </div>
            <div className="inputAuthContainer">
              <label htmlFor="email" className="labelAuth">
                Email:
              </label>
              <Field
                type="email"
                placeholder="example@email.com"
                className="inputAuth"
                name="email"
                id="email"
                onBlur={() => null}
              />
              <ErrorMessage
                name="email"
                className="errorInputForm"
                component="span"
              />
            </div>
            <div className="inputAuthContainer">
              <label htmlFor="password" className="labelAuth">
                Password:
              </label>
              <Field
                type="password"
                placeholder="password"
                autoComplete="off"
                className="inputAuth"
                name="password"
                id="password"
                onBlur={() => null}
              />
              <ErrorMessage
                name="password"
                className="errorInputForm"
                component="span"
              />
            </div>
            <div className="inputAuthContainer">
              <label htmlFor="jobType" className="labelAuth">
                Job Type:
              </label>
              <Field
                className="inputAuth"
                name="jobType"
                id="jobType"
                onBlur={() => null}
                as="select"
              >
                <option value="">Pick an option</option>
                <option value="Front-End-Developer-Jr">
                  Front End Developer Jr
                </option>
                <option value="Front-End-Developer-Sr">
                  Front End Developer Sr
                </option>
                <option value="Data-Analyst">Data Analyst</option>
                <option value="Back-End-Node">Back End Node</option>
              </Field>
              <ErrorMessage
                name="jobType"
                className="errorInputForm"
                component="span"
              />
            </div>
            <div className="pb-2 flex flex-col justify-center items-center w-full space-y-2">
              <label htmlFor="terms" className="labelAuth">
                Terms & Conditions
              </label>
              <Field
                type="checkbox"
                className="terms"
                name="terms"
                id="terms"
                onBlur={() => null}
              />
              <ErrorMessage
                name="terms"
                className="errorInputForm"
                component="span"
              />
            </div>
            <button
              type="submit"
              className="bg-green-200 w-full h-10 rounded-full ring-2 ring-green-400 hover:bg-green-400 hover:ring-green-500 text-xl text-black"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormikComponents;
