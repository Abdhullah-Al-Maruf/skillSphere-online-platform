"use client";

import { ArrowRight } from "@gravity-ui/icons";
import Link from "next/link";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export default function NoProfilePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-orange-50/30 to-amber-50/50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 ">
          <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-xl shadow-orange-500/20">
            <FaUser className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-amber-500 mb-3">
          Welcome to SkillSphere
        </h1>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Sign in to access your personalized learning dashboard, track your
          progress, and continue your journey.
        </p>

        <div className="space-y-3 ">
          <Link href="/login">
            <button className="bg-linear-to-r from-[#ff8a00] to-[#ff3d00]  w-full group flex items-center justify-center gap-2 px-6 py-3.5  hover:bg-slate-800 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30">
              <FiLogIn className="w-5 h-5" />
              Sign In
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </Link>

          <Link href="/signup">
            <button className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-orange-50 text-slate-700 font-medium rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-200">
              <FaUserPlus className="w-5 h-5 text-orange-600" />
              Create Account
            </button>
          </Link>
        </div>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />
          <span className="text-sm text-slate-400">or</span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        <button className="text-sm text-slate-500 hover:text-orange-600 font-medium transition-colors">
          Continue as Guest
        </button>

        <p className="mt-8 text-xs text-slate-400">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
