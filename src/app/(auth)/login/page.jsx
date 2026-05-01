"use client";

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
import { useState } from "react";
import { motion } from "framer-motion"; // Import Motion

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1, // Stagger child elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className=" mt-30 flex items-center justify-center  px-4">
      {/* Main Card with Motion */}
      <motion.div
        className="w-full max-w-[400px] bg-white border
         border-gray-200 shadow-lg p-8 rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <span
            className="text-2xl font-bold bg-gradient-to-r from-[#ff6b00] to-[#a04100] bg-clip-text text-transparent block mb-2"
          >
            SkillSphere
          </span>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">
            Enter your details to continue your growth.
          </p>
        </motion.div>

        {/* Form Section */}
        <Form
          className="flex flex-col gap-5"
          render={(props) => <form {...props} />}
          onSubmit={onSubmit}
        >
          {/* Email Field */}
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
              <Label className="text-gray-700 font-semibold text-sm">Email Address</Label>
              <Input 
                placeholder="name@example.com" 
                className="border-orange-200 focus:border-orange-500"
              />
              <FieldError />
            </TextField>
          </motion.div>

          {/* Password Field */}
          <motion.div variants={itemVariants}>
            <TextField isRequired className="w-full" name="password">
              <Label className="text-gray-700 font-semibold text-sm">Password</Label>
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

          {/* Login Button */}
          <motion.div variants={itemVariants} className="pt-2">
            <Button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#a04100] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Check className="mr-2" />
              Login
            </Button>
          </motion.div>
        </Form>

        {/* Divider */}
        <motion.div variants={itemVariants} className="my-6">
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t border-gray-200" />
            <span className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              Or continue with
            </span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>
        </motion.div>

        {/* Google Button */}
        <motion.div variants={itemVariants}>
          <Button 
            className="w-full rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-orange-300 transition-colors" 
            variant="bordered"
          >
            <Icon icon="devicon:google" className="text-lg mr-2" />
            Sign in with Google
          </Button>
        </motion.div>

        {/* Footer Link */}
        <motion.div variants={itemVariants} className="text-center mt-6 text-sm">
          <span className="text-gray-500">New to SkillSphere? </span>
          <Link href='/signup' className="font-semibold text-orange-600 hover:text-orange-700 transition-colors ml-1">
            Register
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;