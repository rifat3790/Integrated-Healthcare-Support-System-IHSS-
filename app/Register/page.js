"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState("patient"); // Default user type
  const [specialty, setSpecialty] = useState(""); // Specialty for doctors

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Surgery",
  ]; // List of specialties for doctors

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, userType, specialty }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Registration successful! Please log in.");
        router.push("/Login");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 bg-base-100 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="text-4xl text-primary mb-4">📝</div>
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-sm text-gray-500 mt-2">
            Sign up to get started with IHSS
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="m@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* User Type Selection */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">User Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Specialty Dropdown for Doctors */}
          {userType === "doctor" && (
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Specialty</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
              >
                <option value="">Select your specialty</option>
                {specialties.map((spec, index) => (
                  <option key={index} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            className={`btn btn-primary w-full mt-4 ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {/* Footer Section */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a className="text-primary hover:underline" href="/Login">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;