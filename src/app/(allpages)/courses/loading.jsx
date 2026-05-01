"use client"
export default function Loading() {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
    backgroundSize: '200px 100%',
    animation: 'shimmer 1.5s infinite',
  };

  return (
     <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3 p-4 space-y-6 ">
      {/* Define keyframes globally via style tag (only once) */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }
      `}</style>

      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse bg-white rounded-lg shadow p-4">
          <div
            className="h-48 w-full rounded mb-4"
            style={shimmerStyle}
          ></div>
          <div
            className="h-6 w-3/4 rounded mb-3"
            style={shimmerStyle}
          ></div>
          <div
            className="h-4 w-full rounded mb-2"
            style={shimmerStyle}
          ></div>
          <div
            className="h-4 w-5/6 rounded mb-4"
            style={shimmerStyle}
          ></div>
          <div className="flex justify-between">
            <div
              className="h-4 w-20 rounded"
              style={shimmerStyle}
            ></div>
            <div
              className="h-8 w-24 rounded"
              style={shimmerStyle}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}        