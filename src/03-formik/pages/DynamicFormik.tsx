import { Form, Formik } from "formik";
import formJson from "../data/data.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

type TypeInput = "email" | "password" | "text";
type AutoComplete = "off" | "on";

const initialValues: { [key: string]: string } = {};
const validationSchema: { [key: string]: unknown } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema;

  for (const validation of input.validations) {
    switch (validation.type) {
      case "string":
        schema = Yup.string();
        break;
      case "boolean":
        schema = Yup.boolean();
        break;
      case "email":
        schema = schema!.email();
        break;
      case "required":
        schema = schema!.required();
        break;
      case "min":
        schema = schema!.min(4, "please enter at least 4 characters");
        break;
      case "max":
        schema = schema!.max(15, "please enter below 15 characters");
        break;
      default:
        console.error("no match founded");
        break;
    }
  }
  validationSchema[input.name] = schema;
}

const validation = Yup.object({ ...validationSchema } as Yup.ObjectShape);
console.log(validation);

const DynamicFormik = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center space-y-8 font-mono font-bold">
      <h1 className="text-5xl">Dynamic Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validation}
      >
        {() => (
          <Form className="Form">
            {formJson.map(
              ({
                label,
                name,
                placeholder,
                type,
                options,
                autoComplete,
                onBlur,
              }) => {
                switch (type) {
                  case "text":
                  case "email":
                  case "password":
                    return (
                      <div className="inputAuthContainer" key={name}>
                        <MyTextInput
                          id={name}
                          label={label}
                          name={name}
                          placeholder={placeholder as string}
                          type={type as TypeInput}
                          classNameInput="inputAuth"
                          classNameLabel="labelAuth"
                          autoComplete={autoComplete as AutoComplete}
                          classNameError="errorInputForm"
                          onBlur={() => onBlur!}
                        />
                      </div>
                    );
                  case "select":
                    return (
                      <div key={name} className="inputAuthContainer">
                        <MySelect
                          id={name}
                          label={label}
                          name={name}
                          classNameLabel="labelAuth"
                          classNameInput="inputAuth"
                          classNameError="errorInputForm"
                        >
                          <option value="">Select An Option</option>
                          {options?.map(({ id, value }) => (
                            <option value={value} key={id}>
                              {value}
                            </option>
                          ))}
                        </MySelect>
                      </div>
                    );
                  default:
                    break;
                }
              }
            )}
            <button className="ButtonSaveForm" type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DynamicFormik;
