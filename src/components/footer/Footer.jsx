import React from "react";
import Link from "next/link"; // Import Next.js Link
import { Button } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="bg-[#ffece3] border-t border-gray-200 pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-orange-700">SkillSphere</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Empowering your professional journey with illuminated knowledge and
            precision tools.
          </p>
        </div>

        {/* Navigation Links - Using Next.js Link */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-orange-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-orange-600 transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:text-orange-600 transition-colors"
              >
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links - Also using Link for consistency */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/help"
                className="hover:text-orange-600 transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-orange-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-orange-600 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
          <p className="text-gray-600 text-sm mb-4">
            Stay updated with the latest learning tracks.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="px-4 rounded-full py-2.5 border border-orange-600  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full text-sm"
            />
            <Button
              type="submit"
              className={
                "bg-linear-to-b from-[#ff6b00] to-[#a04100] shadow-lg shadow-orange-500/50"
              }
            >
              Join
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
          © 2024 SkillSphere. Illuminated Growth for Professionals.
        </p>
      </div>
    </footer>
  );
}
