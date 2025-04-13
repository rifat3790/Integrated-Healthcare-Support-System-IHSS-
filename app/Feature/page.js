import React from "react";
import features from "../../lib/feature"; // Import the feature data

const FeaturePage = () => {
  return (
    <div className="pt-10 bg-base-200">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">Everything You Need</h1>
        <p className="mt-5">
          Our platform provides a comprehensive suite of tools to manage your
          healthcare needs.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
        {features.map((feature) => (
          <div key={feature.id} className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;