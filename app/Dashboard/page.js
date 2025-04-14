"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, FileText, Heart, LayoutDashboard, LogOut, MessageSquare, Settings, User } from "lucide-react";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("appointments");

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md">
        <div className="p-4 text-center text-xl font-bold text-primary">
          Dashboard
        </div>
        <ul className="menu p-4">
          <li>
            <Link href="/dashboard" className="hover:bg-primary hover:text-white">
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/appointments" className="hover:bg-primary hover:text-white">
              <Calendar className="h-5 w-5" />
              Appointments
            </Link>
          </li>
          <li>
            <Link href="/dashboard/prescriptions" className="hover:bg-primary hover:text-white">
              <FileText className="h-5 w-5" />
              Prescriptions
            </Link>
          </li>
          <li>
            <Link href="/dashboard/health-tracker" className="hover:bg-primary hover:text-white">
              <Heart className="h-5 w-5" />
              Health Tracker
            </Link>
          </li>
          <li>
            <Link href="/dashboard/messages" className="hover:bg-primary hover:text-white">
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="hover:bg-primary hover:text-white">
              <User className="h-5 w-5" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="hover:bg-primary hover:text-white">
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:bg-primary hover:text-white">
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Rifat</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Upcoming Appointments</h2>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-500">Next: Today at 2:00 PM</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Active Prescriptions</h2>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-gray-500">2 need refill soon</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Recent Test Results</h2>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-gray-500">1 new since last week</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Messages</h2>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-500">2 unread messages</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="tabs">
            <button
              className={`tab tab-bordered ${activeTab === "appointments" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("appointments")}
            >
              Appointments
            </button>
            <button
              className={`tab tab-bordered ${activeTab === "prescriptions" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("prescriptions")}
            >
              Prescriptions
            </button>
            <button
              className={`tab tab-bordered ${activeTab === "test-results" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("test-results")}
            >
              Test Results
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "appointments" && (
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Upcoming Appointments</h2>
                  <p>View and manage your scheduled appointments.</p>
                </div>
              </div>
            )}
            {activeTab === "prescriptions" && (
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Active Prescriptions</h2>
                  <p>View your current prescriptions and refill status.</p>
                </div>
              </div>
            )}
            {activeTab === "test-results" && (
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Test Results</h2>
                  <p>View your recent test results and reports.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;