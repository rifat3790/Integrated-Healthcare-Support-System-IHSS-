export function Skeleton({ className }) {
    return (
      <div
        className={`animate-pulse bg-gray-200 rounded ${className}`}
        style={{ height: "1rem", width: "100%" }}
      ></div>
    );
  }