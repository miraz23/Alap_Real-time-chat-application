import { IconMail, IconLock } from "@tabler/icons-react";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import { Anchor } from "../../components/Anchor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long"}).max(20, { message: "Password must be at most 20 characters long" }),
});

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center">
            <img src="/logo.png" alt="" />
          </div>
          <Title type={3} className="mt-6">Welcome back</Title>
          <Text className="mt-2 text-sm text-gray-600">Please sign in to your account</Text>
        </div>

        {/* Sign In Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <TextInput icon={<IconMail size={20} className="text-gray-400" />} error={errors.email?.message} {...register("email")} type="email" label="Email address" placeholder="Enter your email"/>
            <PasswordInput icon={<IconLock size={20} className="text-gray-400" />} error={errors.password?.message} {...register("password")} label="Password" placeholder="Enter your password"/>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4"/>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            <Anchor href="#">Forgot password?</Anchor>
          </div>

          <Button type="submit">Sign in</Button>
        </form>

        {/* Sign up link */}
        <div className="text-center text-sm">
          <Text className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Anchor to="/auth/sign-up"> Sign up</Anchor>
          </Text>
        </div>
      </div>
    </div>
  );
}