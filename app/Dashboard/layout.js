"use client";

import React from "react";
import { AppHeader } from "@/components/app-header"; // Import the stored AppHeader
import { AppSidebar } from "@/components/app-sidebar"; // Import the stored AppSidebar

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;