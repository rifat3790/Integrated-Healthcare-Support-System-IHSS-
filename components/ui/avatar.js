// filepath: d:\IDP\ihss\components\ui\avatar.js
import React from "react";

export function Avatar({ children, className }) {
  return <div className={`rounded-full bg-gray-200 ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-full" />;
}

export function AvatarFallback({ children }) {
  return <div className="flex items-center justify-center rounded-full bg-gray-400 text-white">{children}</div>;
}