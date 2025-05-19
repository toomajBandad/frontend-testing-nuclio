import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { register: registerUser, error, loading } = useRegister();

  const onSubmit = async (data) => {
    const result = await registerUser(data);
    if (result) {
      navigate("/profile");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName")}
        placeholder="Nombre"
        className="firstName"
      />
      <input
        {...register("lastName")}
        placeholder="Apellido"
        className="lastName"
      />
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="email"
      />
      <input
        {...register("password")}
        placeholder="Contraseña"
        type="password"
        className="password"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrar"}
      </button>
      {error && <p className="errorText">{error}</p>}
    </form>
  );
};

export default RegisterForm;
