"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export function MedicationForm({ onComplete }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [refillDate, setRefillDate] = useState("");
  const [hasEndDate, setHasEndDate] = useState(false);
  const [hasRefillDate, setHasRefillDate] = useState(false);
  const [medicationType, setMedicationType] = useState("prescription");
  const [timeOfDay, setTimeOfDay] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your medication has been added to your list.");
    onComplete();
  };

  const timeOptions = [
    { id: "morning", label: "Morning" },
    { id: "noon", label: "Noon" },
    { id: "afternoon", label: "Afternoon" },
    { id: "evening", label: "Evening" },
    { id: "bedtime", label: "Bedtime" },
    { id: "as-needed", label: "As needed" },
  ];

  return (
    <div className="card bg-base-100 shadow-md p-6">
      <div className="card-header mb-4">
        <h2 className="text-xl font-bold">Add New Medication</h2>
        <p className="text-sm text-gray-500">Enter the details of your medication</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Medication Name and Type */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="form-control">
              <label htmlFor="medication-name" className="label">
                <span className="label-text">Medication Name</span>
              </label>
              <input
                id="medication-name"
                type="text"
                placeholder="Enter medication name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="medication-type" className="label">
                <span className="label-text">Medication Type</span>
              </label>
              <select
                id="medication-type"
                className="select select-bordered w-full"
                value={medicationType}
                onChange={(e) => setMedicationType(e.target.value)}
              >
                <option value="prescription">Prescription</option>
                <option value="otc">Over-the-Counter</option>
                <option value="supplement">Supplement</option>
              </select>
            </div>
          </div>

          {/* Dosage and Frequency */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="form-control">
              <label htmlFor="dosage" className="label">
                <span className="label-text">Dosage</span>
              </label>
              <input
                id="dosage"
                type="text"
                placeholder="e.g., 10mg, 1 tablet"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="frequency" className="label">
                <span className="label-text">Frequency</span>
              </label>
              <select id="frequency" className="select select-bordered w-full">
                <option value="once-daily">Once Daily</option>
                <option value="twice-daily">Twice Daily</option>
                <option value="three-times-daily">Three Times Daily</option>
                <option value="four-times-daily">Four Times Daily</option>
                <option value="weekly">Weekly</option>
                <option value="as-needed">As Needed</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Time of Day */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Time of Day</span>
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
              {timeOptions.map((option) => (
                <label key={option.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={timeOfDay.includes(option.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimeOfDay([...timeOfDay, option.id]);
                      } else {
                        setTimeOfDay(timeOfDay.filter((time) => time !== option.id));
                      }
                    }}
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Start Date and End Date */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="form-control">
              <label htmlFor="start-date" className="label">
                <span className="label-text">Start Date</span>
              </label>
              <input
                id="start-date"
                type="date"
                className="input input-bordered w-full"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="end-date" className="label">
                <span className="label-text">End Date</span>
              </label>
              <input
                id="end-date"
                type="date"
                className="input input-bordered w-full"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                disabled={!hasEndDate}
              />
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={hasEndDate}
                  onChange={(e) => setHasEndDate(e.target.checked)}
                />
                <span className="text-sm">Has end date</span>
              </label>
            </div>
          </div>

          {/* Instructions */}
          <div className="form-control">
            <label htmlFor="instructions" className="label">
              <span className="label-text">Instructions</span>
            </label>
            <textarea
              id="instructions"
              placeholder="Special instructions for taking this medication"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
        </div>

        {/* Form Actions */}
        <div className="card-footer flex justify-between mt-4">
          <button type="button" className="btn btn-outline" onClick={onComplete}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Medication
          </button>
        </div>
      </form>
    </div>
  );
}