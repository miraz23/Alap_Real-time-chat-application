import { IconMail, IconShieldCheck, IconDeviceDesktop, IconRocket, IconLock,} from "@tabler/icons-react";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { TextInput } from "../../components/TextInput";
import { PasswordInput } from "../../components/PasswordInput";
import { Button } from "../../components/Button";
import { Anchor } from "../../components/Anchor";
import { useForm } from "react-hook-form";
  
const features = [
  {
    Icon: IconShieldCheck,
    title: "Enterprise-grade security",
    description: "Your data is protected with end-to-end encryption",
  },
  {
    Icon: IconDeviceDesktop,
    title: "Cross-platform support",
    description: "Work seamlessly across all your devices",
  },
  {
    Icon: IconRocket,
    title: "Lightning fast experience",
    description: "Real-time messaging with instant delivery",
  },
];

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters long." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters long." }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long"}).max(20, { message: "Password must be at most 20 characters long" }),
});
  
export default function SignUpPage() {
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Marketing content */}
      <div className="w-full md:w-1/2 bg-indigo-50 p-12 flex flex-col justify-center">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt=""/>
            </div>
            <Title type={4} className="bg-gradient-to-r from-fuchsia-500 to-purple-900 text-transparent bg-clip-text">ALAP</Title>
          </div>
          
          <Title type={2} className="mb-6">Connect like never before</Title>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.Icon size={20} className="text-fuchsia-500" />
                </div>
                <div>
                  <Title type={6} className="font-semibold mb-1">{feature.title}</Title>
                  <Text className="text-gray-600">{feature.description}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Title type={3} className="text-3xl font-bold text-gray-900">Create your account</Title>
            <Text className="mt-2 text-sm text-gray-600">Join thousands of teams already using ChatApp</Text>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <TextInput error={errors.firstName?.message} {...register("firstName")} label="First name" placeholder="Mohiul"/>
              <TextInput error={errors.lastName?.message} {...register("lastName")} label="Last Name" placeholder="Islam"/>
            </div>

            <TextInput type="email" error={errors.email?.message} {...register("email")} icon={<IconMail size={20} className="text-gray-400" />} label="Email address" placeholder="mohiulislam23@example.com"/>
            <PasswordInput error={errors.password?.message} {...register("password")} icon={<IconLock size={20} className="text-gray-400" />} label="Password" placeholder="Enter your password"/>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="h-4 w-4"/>
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <Anchor href="#">Terms</Anchor> and{" "}
                <Anchor href="#">Privacy Policy</Anchor>
              </label>
            </div>

            <Button type="submit"> Create account </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <Anchor to="/auth/sign-in"> Sign in</Anchor>
          </p>
        </div>
      </div>
    </div>
  );
}