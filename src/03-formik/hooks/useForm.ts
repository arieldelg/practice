import { FormEvent, useState } from "react";

interface ErrorStateForm {
  [key: string]: string;
}

interface FormInitialState {
  userName: string;
  email: string;
  password: string;
}

const useForm = (): {
  handleSumbit: (e: FormEvent<HTMLFormElement>) => void;
  error: ErrorStateForm;
} => {
  const [error, setError] = useState<ErrorStateForm>({});

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const values = Object.fromEntries(formData) as unknown as FormInitialState;

    for (const value of Object.keys(values)) {
      switch (value) {
        case "userName":
          if (values[value].length === 0) {
            setError((prev) => ({
              ...prev,
              [value]: "user name is required",
            }));
          }
          delete error[value];
          break;
        case "email":
          if (values[value].length === 0) {
            setError((prev) => ({
              ...prev,
              [value]: "email is required",
            }));
          }
          delete error[value];
          break;
        case "password":
          if (values[value].length === 0) {
            setError((prev) => ({
              ...prev,
              [value as string]: "password is required",
            }));
          }
          delete error[value];
          break;
        default:
          console.error("no match found");

          break;
      }
    }
  };
  console.log(error);
  return {
    handleSumbit,
    error,
  };
};

export default useForm;
