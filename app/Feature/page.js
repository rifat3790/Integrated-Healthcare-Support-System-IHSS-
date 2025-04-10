import React from "react";

const FeaturePage = () => {
  return (
    <div className="bg-base-200">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Everything You Need</h1>
        <p className="mt-5">
          Our platform provides a comprehensive suite of tools to manage your
          healthcare needs.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
        {/* Appointment Scheduling */}
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/online-doctor-appointment-booking-concept-260nw-1936484577.jpg"
              alt="Appointment Scheduling"
              className="w-full h-48 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Appointment Scheduling</h2>
            <p>Book appointments with doctors and specialists with just a few clicks.</p>
          </div>
        </div>

        {/* Prescription Management */}
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/online-medical-prescription-concept-260nw-1936484578.jpg"
              alt="Prescription Management"
              className="w-full h-48 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Prescription Management</h2>
            <p>Access and manage your prescriptions securely from anywhere.</p>
          </div>
        </div>

        {/* Test Results */}
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/medical-test-results-concept-260nw-1936484579.jpg"
              alt="Test Results"
              className="w-full h-48 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Test Results</h2>
            <p>View and download your test results quickly and securely.</p>
          </div>
        </div>

        {/* Doctor Recommendations */}
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/doctor-recommendation-concept-260nw-1936484580.jpg"
              alt="Doctor Recommendations"
              className="w-full h-48 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Doctor Recommendations</h2>
            <p>Get AI-powered doctor recommendations based on your symptoms.</p>
          </div>
        </div>

        {/* Secure Authentication */}
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/secure-authentication-concept-260nw-1936484581.jpg"
              alt="Secure Authentication"
              className="w-full h-48 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Secure Authentication</h2>
            <p>Protect your data with advanced security including face verification.</p>
          </div>
        </div>

        {/* Health Records */}
        <div className="card bg-base-100 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://www.shutterstock.com/image-vector/health-records-concept-260nw-1936484582.jpg"
              alt="Health Records"
              className="w-full h-48 object-cover rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Health Records</h2>
            <p>Keep all your medical records organized in one place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;