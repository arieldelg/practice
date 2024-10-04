import { FormEvent, useState } from "react";

interface ErrorStateForm {
  error: boolean;
  errorMessage: string;
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

    if (values.userName.length === 0)
      return setError({ error: true, errorMessage: "user name is required" });

    target.reset();
  };

  return {
    handleSumbit,
    error,
  };
};

export default useForm;
