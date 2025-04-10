"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState("patient");

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration - in a real app, you would call your API
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 bg-base-100 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="text-4xl text-primary mb-4">🛡️</div>
          <h2 className="text-3xl font-bold">Create an Account</h2>
          <p className="text-sm text-gray-500 mt-2">
            Enter your information to create an account
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="confirm-password" className="label">
                <span className="label-text font-semibold">Confirm Password</span>
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Account Type</span>
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="accountType"
                    value="patient"
                    checked={userType === "patient"}
                    onChange={() => setUserType("patient")}
                    className="radio"
                  />
                  <span>Patient</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="accountType"
                    value="doctor"
                    checked={userType === "doctor"}
                    onChange={() => setUserType("doctor")}
                    className="radio"
                  />
                  <span>Doctor</span>
                </label>
              </div>
            </div>

            {userType === "doctor" && (
              <div className="form-control">
                <label htmlFor="specialty" className="label">
                  <span className="label-text font-semibold">Specialty</span>
                </label>
                <select
                  id="specialty"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled selected>
                    Select specialty
                  </option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="psychiatry">Psychiatry</option>
                  <option value="general">General Practice</option>
                </select>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full mt-6 ${
              isLoading ? "loading" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Footer Section */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/Login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;