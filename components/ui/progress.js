export function Progress({ value, max = 100, className }) {
    return (
      <div className={`relative w-full h-4 bg-gray-200 rounded ${className}`}>
        <div
          className="absolute top-0 left-0 h-4 bg-blue-500 rounded"
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
    );
  }