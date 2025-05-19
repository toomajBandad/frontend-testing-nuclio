import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login, error, loading } = useLogin();

  const onSubmit = async (data) => {
    const result = await login(data);
    if (result) {
      navigate("/profile");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="userEmail"
      />
      <input
        {...register("password")}
        placeholder="Contraseña"
        type="password"
        className="userPassword"
      />
      <button type="submit" disabled={loading} className="submitBtn">
        {loading ? "Iniciando..." : "Iniciar sesión"}
      </button>
      {error && <p className="errorText">{error}</p>}
    </form>
  );
};

export default LoginForm;
