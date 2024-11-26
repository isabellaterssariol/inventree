import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../button-auth";
import SocialAuth from "../social-auth";
import { Link } from "react-router-dom";
import { AuthFormProps } from "./types";

export default function AuthForm({
  schema,
  onSubmit,
  loading,
  error,
  title,
  description,
  redirect,
  signInOrUp,
  children,
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../../assets/login_image.png')",
      }}
    >
      <div className="relative z-10 w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-primary-light p-8 rounded-lg shadow-lg max-w-sm mx-auto"
        >
          {children(register, errors)}

          <Button
            loading={loading}
            type="submit"
            className="font-inter text-white bg-primary hover:bg-primary-dark"
          >
            {title}
          </Button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        <SocialAuth />

        <p className="text-center text-secondary font-merriweather">
          {description}{" "}
          <Link
            to={redirect}
            className="text-primary font-bold hover:underline font-merriweather"
          >
            {signInOrUp}
          </Link>
        </p>
      </div>
    </section>
  );
}
