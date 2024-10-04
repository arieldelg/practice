import useForm from "../hooks/useForm";

const RegisterPage = () => {
  const { handleSumbit } = useForm();
  return (
    <div className="space-y-4">
      <h1 className="text-5xl font-mono font-bold ">Register Page</h1>
      <form className="flex flex-col w-64 space-y-4" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="name"
          className="inputAuth"
          name="userName"
        />
        <input
          type="email"
          placeholder="email"
          className="inputAuth"
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="off"
          className="inputAuth"
          name="password"
        />
        <button
          type="submit"
          className="bg-green-300 w-full h-10 rounded-full ring-2 ring-green-600 hover:bg-green-400 hover:ring-green-700 text-xl font-mono font-bold"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
