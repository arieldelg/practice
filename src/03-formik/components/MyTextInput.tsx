import { useField } from "formik";

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
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name} className={classNameLabel}>
        {label}
      </label>
      <input className={classNameInput} {...field} {...props} />
      {meta.touched && meta.error && (
        <span className={classNameError}>{meta.error}</span>
      )}
    </>
  );
};

export default MyTextInput;
