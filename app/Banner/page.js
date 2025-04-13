import Link from "next/link";
import React from "react";

const BannerPage = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between items-center">
          <div className="w-1/2">
            <img
              src="https://i.ibb.co.com/99WNLscM/Prescription-management-system-mediasoft.png"
              alt="Medical Banner Image"
              width={500}
              height={500}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-6xl font-extrabold">
              Healthcare Made <br></br> Simple
            </h1>
            <p className="py-6">
              Connect with doctors, manage appointments, access prescriptions,
              and view test results all in one secure platform.
            </p>
            <div>
              <Link href="/Login"><button className="btn btn-primary">Get Started</button></Link>
              <button className="btn btn-secondary ml-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;