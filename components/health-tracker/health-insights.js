"use client";

export function HealthInsights() {
  // Example insights and recommendations
  const insights = [
    {
      id: 1,
      category: "Sleep",
      title: "Sleep and Activity Correlation",
      description: "On days when you sleep 7+ hours, your step count increases by an average of 1,200 steps.",
      type: "positive",
    },
    {
      id: 2,
      category: "Heart",
      title: "Elevated Resting Heart Rate",
      description: "Your resting heart rate has been 10% higher than your baseline for the past 3 days.",
      type: "warning",
    },
    {
      id: 3,
      category: "Activity",
      title: "Activity Improvement",
      description: "Your weekly active minutes have increased by 15% compared to last month.",
      type: "positive",
    },
    {
      id: 4,
      category: "Hydration",
      title: "Hydration Pattern",
      description: "You consistently drink less water on weekends compared to weekdays.",
      type: "info",
    },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Increase water intake",
      description: "Try to drink at least 8 glasses of water daily, especially on weekends.",
      priority: "medium",
    },
    {
      id: 2,
      title: "Monitor heart rate",
      description: "Keep an eye on your resting heart rate. Consider consulting your doctor if it remains elevated.",
      priority: "high",
    },
    {
      id: 3,
      title: "Maintain sleep schedule",
      description: "Continue your consistent sleep pattern to support your increased activity levels.",
      priority: "medium",
    },
    {
      id: 4,
      title: "Add strength training",
      description: "Consider adding 2-3 days of strength training to complement your cardio activity.",
      priority: "low",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Health Insights & Trends</h2>
        <p className="text-gray-500 mb-6">
          Personalized insights based on your health data patterns and correlations
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="tab tab-bordered tab-active">Key Insights</button>
        <button className="tab tab-bordered">Recommendations</button>
        <button className="tab tab-bordered">Correlations</button>
      </div>

      {/* Key Insights */}
      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`alert ${
              insight.type === "positive"
                ? "alert-success"
                : insight.type === "warning"
                ? "alert-error"
                : "alert-info"
            }`}
          >
            <div>
              <span className="font-bold">{insight.title}</span>
              <p className="text-sm">{insight.description}</p>
            </div>
            <span className="badge badge-outline">{insight.category}</span>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="flex items-start">
                <span
                  className={`badge ${
                    rec.priority === "high"
                      ? "badge-error"
                      : rec.priority === "medium"
                      ? "badge-warning"
                      : "badge-success"
                  } mr-4`}
                >
                  {rec.priority}
                </span>
                <div>
                  <h3 className="font-medium">{rec.title}</h3>
                  <p className="text-sm text-gray-500">{rec.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Correlations */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Sleep vs. Activity</h3>
            <p className="text-sm text-gray-500">How sleep duration affects your daily activity</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">[Correlation Chart Placeholder]</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Hydration vs. Heart Rate</h3>
            <p className="text-sm text-gray-500">How water intake affects your resting heart rate</p>
            <div className="mt-4">
              <p className="text-sm text-gray-500">[Correlation Chart Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}