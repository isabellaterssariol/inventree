import { useNavigate } from "react-router-dom";
import InputAuth from "../../components/input-auth/index";
import { useAuth } from "../../context/auth-firebase";
import AuthForm from "../../components/auth-form";
import { loginSchema } from "../../utils/validation";

export default function Login() {
  const { loginWithEmail, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    await loginWithEmail(email, password);
    if (!error) {
      navigate("/");
    }
  };

  return (
    <AuthForm
      schema={loginSchema}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      title="Sign In"
      description="Don't have an account?"
      redirect="/register"
      signInOrUp="Sign Up"
    >
      {(register, errors) => (
        <>
          <InputAuth
            label="E-mail"
            type="text"
            placeholder="Enter your e-mail"
            className="mb-4"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <InputAuth
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="mb-6"
            register={register}
            name="password"
            error={errors.password?.message}
          />
        </>
      )}
    </AuthForm>
  );
}