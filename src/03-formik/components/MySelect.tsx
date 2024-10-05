import { ErrorMessage, useField } from "formik";

interface MySelectProps {
  label: string;
  name: string;
  classNameInput?: string;
  id: string;
  onBlur?: () => null;
  classNameError?: string;
  classNameLabel?: string;
  children: React.ReactNode;
}

const MySelect = ({
  classNameError,
  classNameInput,
  classNameLabel,
  label,
  ...props
}: MySelectProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className={classNameLabel}>
        {label}
      </label>
      <select className={classNameInput} {...field} {...props} />
      <ErrorMessage
        name={props.name}
        className={classNameError}
        component="span"
      />
    </>
  );
};

export default MySelect;
