import { FieldValues, SubmitHandler, UseFormRegister } from "react-hook-form";
import { ObjectSchema } from "yup";

export interface AuthFormProps {
  schema: ObjectSchema<any>;
  onSubmit: SubmitHandler<any>;
  loading: boolean;
  error: string | null;
  title: string;
  description: string;
  redirect: string;
  signInOrUp: string;
  children: (
    register: UseFormRegister<FieldValues> | ((name: string) => Promise<void>),
    errors: any
  ) => React.ReactNode;
}
