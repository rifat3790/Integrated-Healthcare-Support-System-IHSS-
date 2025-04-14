"use client";

import { useState } from "react";

export function HealthMetricsDashboard() {
  const [timeRange, setTimeRange] = useState("30d");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold">Health Metrics Dashboard</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="select select-bordered w-[180px]"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 3 months</option>
          <option value="180d">Last 6 months</option>
          <option value="365d">Last year</option>
        </select>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Average Steps</h3>
            <p className="text-2xl font-bold">8,742</p>
            <p className="text-sm text-green-500">+12% vs previous month</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Avg Heart Rate</h3>
            <p className="text-2xl font-bold">72 bpm</p>
            <p className="text-sm text-red-500">-3% vs previous month</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Avg Water Intake</h3>
            <p className="text-2xl font-bold">64 oz</p>
            <p className="text-sm text-green-500">+8% vs previous month</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Avg Sleep</h3>
            <p className="text-2xl font-bold">7.2 hrs</p>
            <p className="text-sm text-green-500">+5% vs previous month</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button className="tab tab-bordered tab-active">Vitals</button>
        <button className="tab tab-bordered">Body Metrics</button>
        <button className="tab tab-bordered">Activity & Sleep</button>
        <button className="tab tab-bordered">Lab Results</button>
      </div>

      {/* Vitals Tab Content */}
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Blood Pressure</h3>
              <p className="text-sm text-gray-500">Systolic & Diastolic (mmHg)</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">[Blood Pressure Chart Placeholder]</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Heart Rate</h3>
              <p className="text-sm text-gray-500">Beats per minute (BPM)</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">[Heart Rate Chart Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Results Tab Content */}
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Blood Glucose</h3>
              <p className="text-sm text-gray-500">Blood sugar levels (mg/dL)</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">[Blood Glucose Chart Placeholder]</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Cholesterol</h3>
              <p className="text-sm text-gray-500">HDL, LDL & Total (mg/dL)</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">[Cholesterol Chart Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}