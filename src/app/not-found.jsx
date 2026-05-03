import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#ffece3]  flex flex-col items-center justify-center px-4 text-center">
      
      {/* Large 404 Text with Orange Gradient/Shadow */}
      <h1 className="text-9xl font-extrabold text-orange-500 tracking-tight">
        404
      </h1>
      
      {/* Subtitle */}
      <p className="mt-4 text-2xl font-bold text-gray-900">
        Page Not Found
      </p>
      
      {/* Description */}
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or didnt exist in the first place.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-linear-to-b from-[#ff6b00] to-[#a04100] shadow-lg shadow-orange-500/50 rounded-md text-white font-medium  transition-colors "
        >
        
          Go Back Home
        </Link>
        
        <Link
          href="/courses"
          className="px-6 py-3 bg-white text-gray-700 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 hover:text-orange-500 hover:border-orange-500 transition-colors"
        >
          Browse Courses
        </Link>
      </div>

      {/* Decorative Element (Optional) */}
      <div className="mt-12 text-gray-300">
        <svg 
          className="w-16 h-16 mx-auto opacity-50" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>

    </div>
  );
}