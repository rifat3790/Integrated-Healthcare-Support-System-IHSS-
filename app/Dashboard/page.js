"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  FileText,
  Heart,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import { useSearchParams } from "next/navigation"; // To read query parameters

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Appointments");
  const [appointments, setAppointments] = useState([]);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const searchParams = useSearchParams();
  const userName = searchParams.get("name"); // Get the name from the URL

  // Fetch appointments from the database
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/appointments");
        const data = await response.json();

        setAppointments(data); // Set all appointments
        setTotalAppointments(data.length); // Set the total number of appointments
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md">
        <div className="p-4 text-center text-xl font-bold text-primary">
          Dashboard
        </div>
        <ul className="menu p-4">
          <li>
            <Link href="/Dashboard" className="hover:bg-primary hover:text-white">
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Appointments" className="hover:bg-primary hover:text-white">
              <Calendar className="h-5 w-5" />
              Appointments
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Prescriptions" className="hover:bg-primary hover:text-white">
              <FileText className="h-5 w-5" />
              Prescriptions
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Health-Tracker" className="hover:bg-primary hover:text-white">
              <Heart className="h-5 w-5" />
              Health Tracker
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Messages" className="hover:bg-primary hover:text-white">
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Profile" className="hover:bg-primary hover:text-white">
              <User className="h-5 w-5" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="/Dashboard/Settings" className="hover:bg-primary hover:text-white">
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
          <p className="text-gray-500">Welcome back, {userName ? userName : "User"}!</p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Total Appointments</h2>
              <p className="text-2xl font-bold">{totalAppointments}</p>
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
              className={`tab tab-bordered ${activeTab === "Appointments" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("Appointments")}
            >
              Appointments
            </button>
            <button
              className={`tab tab-bordered ${activeTab === "Prescriptions" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("Prescriptions")}
            >
              Prescriptions
            </button>
            <button
              className={`tab tab-bordered ${activeTab === "Test-Results" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("Test-Results")}
            >
              Test Results
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "Appointments" && (
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">All Appointments</h2>
                  {appointments.length > 0 ? (
                    <div className="mt-4 space-y-4">
                      {appointments.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="border-b pb-4 flex justify-between items-center"
                        >
                          <div>
                            <p className="font-semibold">{appointment.doctor_name}</p>
                            <p className="text-sm text-gray-500">{appointment.department}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(appointment.appointment_date).toLocaleString()}
                            </p>
                          </div>
                          <span className="badge badge-primary">Upcoming</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">No appointments found</p>
                  )}
                </div>
              </div>
            )}
            {activeTab === "Prescriptions" && (
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Active Prescriptions</h2>
                  <p>View your current prescriptions and refill status.</p>
                </div>
              </div>
            )}
            {activeTab === "Test-Results" && (
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