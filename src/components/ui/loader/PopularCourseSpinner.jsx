// src/components/ui/loading.jsx
export default function popularCourseSpinner({ count = 6 }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-4  animate-pulse">
          <div className="bg-gray-200 h-48 w-full rounded mb-4"></div>
          <div className="bg-gray-200 h-6 w-3/4 rounded mb-3"></div>
          <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
          <div className="bg-gray-200 h-4 w-5/6 rounded mb-4"></div>
          <div className="flex justify-between">
            <div className="bg-gray-200 h-4 w-20 rounded"></div>
            <div className="bg-orange-100 h-8 w-24 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}