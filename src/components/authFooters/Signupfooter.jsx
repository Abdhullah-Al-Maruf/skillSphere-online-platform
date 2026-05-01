import React from 'react';
import Link from 'next/link';

export default function Signupfooter() {
  return (
    <footer className="bg-[#ffece3] border-t py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">SkillSphere</span>
          <span>© 2024 SkillSphere. Growth Illuminated.</span>
        </div>

        {/* Legal Links */}
        <nav className="flex gap-6">
          <Link href="/privacy" className="hover:text-teal-600 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-teal-600 transition-colors">
            Terms
          </Link>
          <Link href="/support" className="hover:text-teal-600 transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
}