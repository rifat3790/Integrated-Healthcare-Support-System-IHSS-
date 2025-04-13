"use client";

import { useState } from "react";
import { CalendarIcon, Plus } from "lucide-react";

export default function AppointmentsPage() {
  const [date, setDate] = useState(new Date()); // Ensure `date` is initialized as a `Date` object

  return (
    <div className="container py-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <p className="text-gray-500">Manage your upcoming appointments</p>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Filter and New Appointment Button */}
          <div className="flex justify-between items-center">
            <select className="select select-bordered w-[180px]">
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
              <option value="cancelled">Cancelled</option>
              <option value="all">All</option>
            </select>
            <button className="btn btn-primary">
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </button>
          </div>

          {/* Tabs for List and Calendar Views */}
          <div className="tabs">
            <button className="tab tab-bordered tab-active">List</button>
            <button className="tab tab-bordered">Calendar</button>
          </div>

          {/* List View */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Upcoming Appointments</h2>
              <p className="text-sm text-gray-500">View and manage your scheduled appointments</p>
              <div className="mt-4 space-y-4">
                {/* Appointment Item */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Cardiology</p>
                    <p className="text-sm text-gray-500">3/22/2025 - 10:00 AM</p>
                  </div>
                  <span className="badge badge-primary">Upcoming</span>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold">Dr. Michael Chen</h3>
                    <p className="text-sm text-gray-500">Dermatology</p>
                    <p className="text-sm text-gray-500">3/22/2025 - 2:00 PM</p>
                  </div>
                  <span className="badge badge-primary">Upcoming</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Dr. Emily Rodriguez</h3>
                    <p className="text-sm text-gray-500">Neurology</p>
                    <p className="text-sm text-gray-500">3/25/2025 - 11:30 AM</p>
                  </div>
                  <span className="badge badge-primary">Upcoming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar View */}
          <div className="hidden">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Appointment Calendar</h2>
                <p className="text-sm text-gray-500">View your appointments in calendar format</p>
                <div className="mt-4 flex h-[400px] items-center justify-center rounded-md border border-dashed">
                  <div className="text-center">
                    <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium">Calendar View</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Calendar view would display here with all appointments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Select Date</h2>
              <p className="text-sm text-gray-500">Choose a date to view or schedule appointments</p>
              <div className="mt-4">
                <input
                  type="date"
                  className="input input-bordered w-full"
                  value={date?.toISOString().split("T")[0]} // Ensure `date` is properly formatted
                  onChange={(e) => setDate(new Date(e.target.value))}
                />
                <button className="btn btn-primary mt-4 w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Schedule for {date?.toLocaleDateString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}