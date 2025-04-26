"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("credentials"); // State to manage active tab
  const [isLoading, setIsLoading] = useState(false); // Loading state for login
  const videoRef = useRef(null); // Ref for the video element

  const handleFaceVerification = () => {
    setActiveTab("face-verification"); // Set the active tab to "face-verification"

    // Access the camera
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error("Error accessing the camera:", err);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        router.push("/Dashboard"); // Redirect to the dashboard
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
          <div className="text-4xl text-primary mb-4">🔒</div>
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-2">
            Sign in to your account to continue
          </p>
        </div>

        {/* Tabs Section */}
        <div role="tablist" className="tabs tabs-boxed mb-6">
          <button
            role="tab"
            className={`tab ${activeTab === "credentials" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("credentials")}
          >
            Credentials
          </button>
          <button
            role="tab"
            className={`tab ${
              activeTab === "face-verification" ? "tab-active" : ""
            }`}
            onClick={handleFaceVerification}
          >
            Face Verification
          </button>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === "credentials" && (
          <form onSubmit={handleLogin}>
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
              <label className="label flex justify-between">
                <span className="label-text font-semibold">Password</span>
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full mt-4 ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        )}

        {activeTab === "face-verification" && (
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-4">
              Please position your face in front of the camera for verification.
            </p>
            <video
              ref={videoRef}
              className="w-full h-64 bg-black rounded-lg"
              autoPlay
              muted
            ></video>
          </div>
        )}

        {/* Footer Section */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a className="text-primary hover:underline" href="/Register">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;