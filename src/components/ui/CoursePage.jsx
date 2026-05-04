// pages/course/[id].jsx (or your CoursePage component)

import StickySidebar from "./StickySidebar";


export default function CoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Course Content */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Course Title</h1>
          
          {/* What you'll learn */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">What you ll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              <li>✓ Master React fundamentals</li>
              <li>✓ Build real-world projects</li>
              <li>✓ Understand hooks & state</li>
              <li>✓ Deploy to production</li>
            </ul>
          </div>
          
          {/* Course content - Long content for scrolling demo */}
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            <div className="space-y-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium">Lesson {i + 1}: Topic Title</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Sidebar */}
        <div className="lg:col-span-1">
          <StickySidebar offset={80}>
            <div className="space-y-4">
              
              {/* Price Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">$9.99</span>
                  <span className="text-gray-500 line-through text-lg">$59.99</span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                    83% off
                  </span>
                </div>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg mb-3 transition shadow-md">
                  Add to cart
                </button>
                
                <button className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-4 rounded-lg transition">
                  Buy now
                </button>
                
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span>⏰</span> 4 days left at this price!
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✓</span> 30-day money-back guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✓</span> Full lifetime access
                  </p>
                </div>
              </div>

              {/* Course includes */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold mb-3 text-gray-900">This course includes:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">📹 23.5 hours on-demand video</li>
                  <li className="flex items-center gap-2">📥 87 downloadable resources</li>
                  <li className="flex items-center gap-2">📱 Access on mobile and TV</li>
                  <li className="flex items-center gap-2">📜 Certificate of completion</li>
                </ul>
              </div>

              {/* Instructor Card */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold mb-3 text-gray-900">Instructor</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                    JD
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">Senior Developer</p>
                  </div>
                </div>
              </div>

            </div>
          </StickySidebar>
        </div>

      </div>
    </div>
  );
}