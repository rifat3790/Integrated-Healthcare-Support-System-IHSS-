"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { HealthMetricsDashboard } from "@/components/health-tracker/health-metrics-dashboard";
import { HealthMetricsForm } from "@/components/health-tracker/health-metrics-form";

export default function HealthTrackerPage() {
  const [showForm, setShowForm] = useState(false); // State to toggle the form

  return (
    <div className="container mx-auto py-6">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Health Tracker</h1>
          <button
            className="btn btn-primary flex items-center gap-2"
            onClick={() => setShowForm(!showForm)} // Toggle the form visibility
          >
            <Plus className="h-4 w-4" />
            {showForm ? "Close Form" : "Record Health Data"}
          </button>
        </div>
        <p className="text-gray-500">
          Track, visualize, and analyze your health metrics to improve your overall wellbeing
        </p>
      </div>

      {/* Health Metrics Form */}
      {showForm && (
        <div className="card bg-base-100 shadow-md mb-6">
          <div className="card-body">
            <h2 className="card-title">Record New Health Data</h2>
            <p className="text-gray-500">Enter your latest health measurements</p>
            <HealthMetricsForm onComplete={() => setShowForm(false)} />
          </div>
        </div>
      )}

      {/* Health Metrics Dashboard */}
      <HealthMetricsDashboard />
    </div>
  );
}