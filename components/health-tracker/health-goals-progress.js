"use client";

import { useState } from "react";

export function HealthGoalsProgress() {
  const [showNewGoalDialog, setShowNewGoalDialog] = useState(false);

  // Example active and completed goals
  const activeGoals = [
    {
      id: 1,
      name: "Daily Steps",
      target: "10,000 steps",
      current: 8742,
      progress: 87,
      category: "Activity",
      dueDate: "Daily",
      streak: 5,
    },
    {
      id: 2,
      name: "Weight Loss",
      target: "Lose 10 lbs",
      current: 6,
      progress: 60,
      category: "Weight",
      dueDate: "Aug 15, 2025",
      streak: null,
    },
  ];

  const completedGoals = [
    {
      id: 101,
      name: "Lower Blood Pressure",
      target: "Below 120/80",
      achievedDate: "March 15, 2025",
      category: "Heart Health",
    },
    {
      id: 102,
      name: "30-Day Exercise Challenge",
      target: "Exercise 30 days in a row",
      achievedDate: "February 28, 2025",
      category: "Activity",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Health Goals</h2>
          <p className="text-gray-500">Track your progress towards your health and wellness goals</p>
        </div>
        <button
          className="btn btn-primary flex items-center gap-2"
          onClick={() => setShowNewGoalDialog(true)}
        >
          <span className="material-icons">add</span>
          Add New Goal
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab tab-bordered tab-active">Active Goals</button>
        <button className="tab tab-bordered">Completed Goals</button>
      </div>

      {/* Active Goals */}
      <div className="grid gap-4 md:grid-cols-2">
        {activeGoals.map((goal) => (
          <div key={goal.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title">{goal.name}</h3>
                <span className="badge badge-outline">{goal.category}</span>
              </div>
              <p className="text-sm text-gray-500">Target: {goal.target}</p>
              <p className="text-sm text-gray-500">Due: {goal.dueDate}</p>
              <div className="mt-2">
                <progress
                  className="progress progress-primary w-full"
                  value={goal.progress}
                  max="100"
                ></progress>
                <p className="text-sm mt-1">Progress: {goal.progress}%</p>
              </div>
              {goal.streak && (
                <p className="text-sm text-yellow-500 mt-2">🔥 {goal.streak}-day streak!</p>
              )}
              <div className="mt-4 flex gap-2">
                <button className="btn btn-outline btn-sm flex-1">Update</button>
                <button className="btn btn-sm flex-1">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Goals */}
      <div className="grid gap-4 md:grid-cols-2">
        {completedGoals.map((goal) => (
          <div key={goal.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h3 className="card-title">{goal.name}</h3>
                <span className="badge badge-outline">{goal.category}</span>
              </div>
              <p className="text-sm text-gray-500">Target: {goal.target}</p>
              <p className="text-sm text-gray-500">Achieved: {goal.achievedDate}</p>
              <p className="text-sm text-green-500 mt-2">🎉 Goal achieved!</p>
            </div>
          </div>
        ))}
      </div>

      {/* New Goal Dialog */}
      {showNewGoalDialog && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Create New Health Goal</h3>
            <p className="text-sm text-gray-500 mb-4">
              Set a new health goal to track your progress and stay motivated.
            </p>
            <div className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Goal Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Daily Steps, Weight Loss"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-bordered w-full">
                  <option>Activity</option>
                  <option>Weight</option>
                  <option>Heart Health</option>
                  <option>Sleep</option>
                  <option>Hydration</option>
                  <option>Nutrition</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text">Target Value</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 10000, 64, 7"
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text">Unit</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option>Steps</option>
                    <option>Pounds (lbs)</option>
                    <option>Kilograms (kg)</option>
                    <option>Hours</option>
                    <option>Minutes</option>
                    <option>Ounces (oz)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Deadline or Frequency</span>
                </label>
                <select className="select select-bordered w-full">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Custom Date</option>
                </select>
              </div>
            </div>
            <div className="modal-action">
              <button
                className="btn btn-outline"
                onClick={() => setShowNewGoalDialog(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setShowNewGoalDialog(false)}
              >
                Create Goal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}