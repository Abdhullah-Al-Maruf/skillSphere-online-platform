"use client";

export default function Skeleton({ count = 6 }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-3xl border border-white/20 p-5 shadow-sm">
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="bg-gray-200/80 h-48 w-full rounded-2xl mb-5"></div>
          <div className="bg-gray-200/80 h-6 w-3/4 rounded-lg mb-3"></div>
          <div className="bg-gray-200/80 h-4 w-full rounded-lg mb-2"></div>
          <div className="bg-gray-200/80 h-4 w-5/6 rounded-lg mb-6"></div>
          
          <div className="flex justify-between items-center mt-auto">
            <div className="bg-gray-200/80 h-5 w-24 rounded-full"></div>
            <div className="bg-amber-100/80 h-10 w-28 rounded-xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
}