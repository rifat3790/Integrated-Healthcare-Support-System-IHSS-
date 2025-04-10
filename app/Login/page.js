"use client"; // Mark this file as a client component

import React, { useState, useRef } from "react";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("credentials"); // State to manage active tab
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
          <form>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label flex justify-between">
                <span className="label-text font-semibold">Password</span>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">
              Sign In
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