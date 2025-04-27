"use client";

import { useState, useEffect } from "react";
import { CalendarIcon, Plus } from "lucide-react";

export default function AppointmentsPage() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    doctorName: "",
    department: "",
    appointmentDate: "",
  });

  // Fetch appointments from the database
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api/appointments");
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Handle form submission
  const handleAddAppointment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/appointments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newAppointment = await response.json();
        setAppointments([...appointments, { ...formData, id: newAppointment.id }]);
        setShowForm(false); // Hide the form after submission
        setFormData({ doctorName: "", department: "", appointmentDate: "" }); // Reset form
      } else {
        console.error("Failed to add appointment");
      }
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

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
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Appointment
            </button>
          </div>

          {/* Appointment Form */}
          {showForm && (
            <form onSubmit={handleAddAppointment} className="card bg-base-100 shadow-md p-4">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Doctor Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.doctorName}
                  onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Department</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Appointment Date</span>
                </label>
                <input
                  type="datetime-local"
                  className="input input-bordered"
                  value={formData.appointmentDate}
                  onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Add Appointment
              </button>
            </form>
          )}

          {/* List View */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Upcoming Appointments</h2>
              <div className="mt-4 space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-semibold">{appointment.doctorName}</h3>
                      <p className="text-sm text-gray-500">{appointment.department}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(appointment.appointmentDate).toLocaleString()}
                      </p>
                    </div>
                    <span className="badge badge-primary">{appointment.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Select Date</h2>
              <input
                type="date"
                className="input input-bordered w-full"
                value={date?.toISOString().split("T")[0]}
                onChange={(e) => setDate(new Date(e.target.value))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}