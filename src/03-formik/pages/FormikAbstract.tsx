import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

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

const FormikAbstract = () => {
  return (
    <section className="font-mono font-bold space-y-4 w-full flex flex-col justify-center items-center h-full">
      <h1 className="text-4xl">Formik Abstract Page</h1>
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
            {/* 
            //* user name container
            */}

            <div className="inputAuthContainer">
              <MyTextInput
                classNameLabel="labelAuth"
                classNameInput="inputAuth"
                classNameError="errorInputForm"
                id="userName"
                label="User name:"
                name="userName"
                placeholder="name"
                type="text"
                onBlur={() => null}
              />
            </div>

            {/* 
            //* email container
            */}

            <div className="inputAuthContainer">
              <MyTextInput
                classNameLabel="labelAuth"
                classNameInput="inputAuth"
                classNameError="errorInputForm"
                id="email"
                label="Email:"
                name="email"
                placeholder="example@email.com"
                type="email"
                onBlur={() => null}
              />
            </div>

            {/* 
            //* password container
            */}

            <div className="inputAuthContainer">
              <MyTextInput
                classNameLabel="labelAuth"
                classNameInput="inputAuth"
                classNameError="errorInputForm"
                id="password"
                label="Password:"
                name="password"
                placeholder="password"
                type="password"
                autoComplete="off"
                onBlur={() => null}
              />
            </div>

            {/* 
            //* select option, Job Type container
            */}

            <div className="inputAuthContainer">
              <MySelect
                label="Job Type"
                classNameError="errorInputForm"
                classNameInput="inputAuth"
                classNameLabel="labelAuth"
                name="jobType"
                id="jobType"
                onBlur={() => null}
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
              </MySelect>
            </div>

            {/* 
            //* checkbox container, terms
            */}

            <div className="pb-2 flex flex-col justify-center items-center w-full space-y-2">
              <MyCheckbox
                id="terms"
                label="Terms & Conditions"
                name="terms"
                type="checkbox"
                classNameError="errorInputForm"
                classNameInput="terms"
                classNameLabel="labelAuth"
                onBlur={() => null}
              />
            </div>

            {/* 
              //* buttons send submit
            */}

            <button type="submit" className="ButtonSaveForm">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default FormikAbstract;
