import { useNavigate } from "react-router-dom";
import InputAuth from "../../components/input-auth";
import { SubmitHandler } from "react-hook-form";
import { useAuth } from "../../context/auth-firebase";
import AuthForm from "../../components/auth-form";
import { registerSchema } from "../../utils/validation";
import { FormData } from "./types";

export default function Register() {
  const { registerWithEmail, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    await registerWithEmail(email, password);
    if (!error) {
      navigate("/");
    }
  };

  return (
    <AuthForm
      schema={registerSchema}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
      title="Sign Up"
      description="If you have an account?"
      redirect="/login"
      signInOrUp="Sign In"
    >
      {(register, errors) => (
        <>
          <InputAuth
            label="E-mail"
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            className="mb-4"
            register={register}
            error={errors.email?.message}
          />

          <InputAuth
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="mb-6"
            register={register}
            error={errors.password?.message}
          />

          <InputAuth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="mb-6"
            register={register}
            error={errors.confirmPassword?.message}
          />
        </>
      )}
    </AuthForm>
  );
}
