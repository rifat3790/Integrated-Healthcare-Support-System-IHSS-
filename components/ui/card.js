export function Card({ children, className }) {
    return <div className={`rounded-lg border bg-white p-4 shadow ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children, className }) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
  }
  
  export function CardTitle({ children, className }) {
    return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
  }
  
  export function CardDescription({ children, className }) {
    return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
  }
  
  export function CardContent({ children, className }) {
    return <div className={`text-sm ${className}`}>{children}</div>;
  }