import { ErrorMessage, useField } from "formik";

interface MyCheckboxProps {
  label: string;
  name: string;
  type: "text" | "password" | "email" | "checkbox";
  classNameInput?: string;
  id: string;
  onBlur?: () => null;
  classNameError?: string;
  classNameLabel?: string;
}

const MyCheckbox = ({
  classNameError,
  classNameInput,
  classNameLabel,
  label,
  ...props
}: MyCheckboxProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={classNameLabel}>
        {label}
      </label>
      <input className={classNameInput} {...field} {...props} />
      <ErrorMessage
        name={props.name}
        className={classNameError}
        component="span"
      />
    </>
  );
};

export default MyCheckbox;
