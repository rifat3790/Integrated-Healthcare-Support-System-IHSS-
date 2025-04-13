// filepath: d:\IDP\ihss\components\ui\badge.js
import React from "react";

export function Badge({ children, className }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground ${className}`}
    >
      {children}
    </span>
  );
}