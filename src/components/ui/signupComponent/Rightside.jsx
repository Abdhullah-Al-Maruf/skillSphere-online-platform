"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { Eye, EyeSlash, Lock, Person } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { FiLink } from "react-icons/fi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

const Rightside = () => {
  const route = useRouter();
  const [isVisible, setIsVisible] = useState(false);
// for email signup
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.photoUrl.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image,
    });
    if (!error) {
      toast.success("Welcome! Account created successful 🎉", {
        position: "top-center",
        autoClose: 3000,
      });

      route.push("/login");
    } else {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

 // for google auth
  const handleGoogle= async()=>{
    await authClient.signIn.social({
    provider: "google",
  });
  }
  return (
    <div className="w-full max-w-[500px] mt-2 py-10">
      <motion.div
        className="w-full max-w-[450px] bg-white border border-gray-200 shadow-xl shadow-orange-100/50 p-8 sm:p-10 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <span className="text-3xl font-bold bg-linear-to-r from-[#ff6b00] to-[#a04100] bg-clip-text text-transparent block mb-2">
            SkillSphere
          </span>
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>

          <p className="text-gray-500 text-sm mt-2">
            Enter your details to illuminate your growth path.
          </p>
        </motion.div>

        <Form
          className="flex flex-col gap-5"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >
          <motion.div variants={itemVariants}>
            <TextField isRequired name="name">
              <Label className="text-gray-700 font-semibold text-sm">
                Full Name
              </Label>
              <InputGroup className="rounded-xl border border-orange-200 focus-within:border-orange-500 transition-colors">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <Person className="size-5" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  placeholder="name"
                  className="w-full bg-transparent"
                />
              </InputGroup>
              <FieldError />
            </TextField>
          </motion.div>

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
              <InputGroup className="rounded-xl border border-orange-200 focus-within:border-orange-500 transition-colors bg-gray-50/50">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <CgMail className="size-5" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  placeholder="alex@sphere.com"
                  className="w-full bg-transparent"
                />
              </InputGroup>
              <FieldError />
            </TextField>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextField isRequired name="photoUrl">
              <Label className="text-gray-700 font-semibold text-sm">
                Photo URL
              </Label>
              <InputGroup className="rounded-xl border border-orange-200 focus-within:border-orange-500 transition-colors bg-gray-50/50">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <FiLink className="size-5" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  placeholder="https://..."
                  className="w-full bg-transparent"
                />
              </InputGroup>
            </TextField>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextField isRequired className="w-full" name="password">
              <Label className="text-gray-700 font-semibold text-sm">
                Password
              </Label>
              <InputGroup className="rounded-xl border border-orange-200 focus-within:border-orange-500 transition-colors bg-gray-50/50">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <Lock className="size-5" />
                </InputGroup.Prefix>
                <InputGroup.Input
                  placeholder="••••••••"
                  className="w-full bg-transparent"
                  type={isVisible ? "text" : "password"}
                />
                <InputGroup.Suffix className="pr-2">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                    className="text-gray-400 hover:text-orange-600"
                  >
                    {isVisible ? (
                      <EyeSlash className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <FieldError />
            </TextField>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <Button
              type="submit"
              className="w-full rounded-xl bg-linear-to-r from-[#ff6b00] to-[#a04100] text-white font-semibold shadow-md shadow-orange-500/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-12 text-base"
            >
              Create Account
            </Button>
          </motion.div>
        </Form>

        <motion.div variants={itemVariants} className="my-6">
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t border-gray-200" />
            <span className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              Or register with
            </span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
          onClick={handleGoogle}
            className="w-full rounded-xl border border-orange-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-orange-300 transition-colors h-12"
            variant="bordered"
          >
            <Icon icon="devicon:google" className="text-lg mr-2" />
            Continue with Google
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-8 text-sm"
        >
          <span className="text-gray-500">Already have an account? </span>
          <Link
            href="/login"
            className="font-semibold text-orange-600 hover:text-orange-700 transition-colors ml-1"
          >
            Log in
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Rightside;
