"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const LoginClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Debug: Log when component mounts and callbackUrl
  useEffect(() => {
    console.log("LoginClient mounted, callbackUrl:", callbackUrl);
    console.log("AuthClient available:", !!authClient);
  }, [callbackUrl]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      console.log("Attempting login for:", email);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error);
        toast.error(error.message || "Login failed", {
          position: "top-center",
          autoClose: 3000,
        });
        setIsLoading(false);
        return;
      }

      console.log("Login successful:", data);
      toast.success("Login successful 🎉", {
        position: "top-center",
        autoClose: 1000,
      });

      // Small delay to ensure toast is shown before redirect
      setTimeout(() => {
        router.push(callbackUrl);
      }, 500);
      
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred", {
        position: "top-center",
        autoClose: 3000,
      });
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: callbackUrl,
      });
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login failed", {
        position: "top-center",
        autoClose: 3000,
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-30 flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-[400px] bg-white border border-gray-200 shadow-lg p-8 rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Rest of your JSX remains the same */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <span className="text-2xl font-bold bg-linear-to-r from-[#ff6b00] to-[#a04100] bg-clip-text text-transparent block mb-2">
            SkillSphere
          </span>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">
            Enter your details to continue your growth.
          </p>
        </motion.div>

        <Form
          className="flex flex-col gap-5"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >
          <motion.div variants={itemVariants}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-gray-700 font-semibold text-sm">
                Email Address
              </Label>
              <Input
                placeholder="name@example.com"
                className="border border-orange-200 focus-within:border-orange-500 transition-colors"
              />
              <FieldError />
            </TextField>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextField isRequired className="w-full" name="password">
              <Label className="text-gray-700 font-semibold text-sm">
                Password
              </Label>
              <InputGroup className="rounded-xl border border-orange-200 focus-within:border-orange-500 transition-colors">
                <InputGroup.Input
                  placeholder="••••••••"
                  className="w-full"
                  type={isVisible ? "text" : "password"}
                />
                <InputGroup.Suffix className="pr-2">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                    className="text-orange-600"
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <FieldError />
            </TextField>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full rounded-xl bg-linear-to-r from-[#ff6b00] to-[#a04100] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {!isLoading && <Check className="mr-2" />}
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </motion.div>
        </Form>

        <motion.div variants={itemVariants} className="my-6">
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t border-gray-200" />
            <span className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              Or continue with
            </span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            onClick={handleGoogle}
            isLoading={isLoading}
            className="w-full rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-orange-300 transition-colors"
            variant="bordered"
          >
            <Icon icon="devicon:google" className="text-lg mr-2" />
            Sign in with Google
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-6 text-sm">
          <span className="text-gray-500">New to SkillSphere? </span>
          <Link
            href="/signup"
            className="font-semibold text-orange-600 hover:text-orange-700 transition-colors ml-1"
          >
            Register
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginClient;