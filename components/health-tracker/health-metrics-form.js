"use client";

import React, { useState } from "react"; // Correctly import React and useState

export function HealthMetricsForm({ onComplete }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  if (formSubmitted) {
    return (
      <div className="alert alert-success">
        <div>
          <span className="font-bold">Success!</span>
          <p>Your health data has been recorded successfully. The dashboard will update shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="record-date" className="label">
          Date
        </label>
        <input
          type="date"
          id="record-date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="input input-bordered w-full"
        />
      </div>

      <div className="tabs mb-4">
        <button className="tab tab-bordered tab-active">Vitals</button>
        <button className="tab tab-bordered">Body</button>
        <button className="tab tab-bordered">Activity</button>
        <button className="tab tab-bordered">Nutrition</button>
        <button className="tab tab-bordered">Sleep</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="blood-pressure-systolic" className="label">
            Blood Pressure (Systolic)
          </label>
          <input
            type="number"
            id="blood-pressure-systolic"
            placeholder="120"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="blood-pressure-diastolic" className="label">
            Blood Pressure (Diastolic)
          </label>
          <input
            type="number"
            id="blood-pressure-diastolic"
            placeholder="80"
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button type="button" className="btn btn-outline" onClick={onComplete}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save Health Data
        </button>
      </div>
    </form>
  );
}