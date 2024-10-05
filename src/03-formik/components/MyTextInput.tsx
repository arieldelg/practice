import { ErrorMessage, useField } from "formik";

interface MyTextInputsProps {
  label: string;
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  classNameInput?: string;
  id: string;
  onBlur?: () => null;
  classNameError?: string;
  classNameLabel?: string;
  autoComplete?: "off" | "on";
}

const MyTextInput = ({
  label,
  classNameError,
  classNameInput,
  classNameLabel,
  ...props
}: MyTextInputsProps) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={classNameLabel}>
        {label}
      </label>
      <input className={classNameInput} {...field} {...props} />
      <ErrorMessage
        className={classNameError}
        component="span"
        name={props.name}
      />
    </>
  );
};

export default MyTextInput;
