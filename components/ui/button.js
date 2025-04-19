export function Button({ children, onClick, className, variant = "primary", size = "md", ...props }) {
    const baseStyles = "inline-flex items-center justify-center rounded font-medium focus:outline-none";
    const variants = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      ghost: "text-gray-700 hover:bg-gray-100",
    };
    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }