"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { TrendingUp, TrendingDown, CheckCircle, XCircle, Calendar } from "lucide-react";

export function MedicationAdherence() {
  const [loading, setLoading] = useState(true);
  const [adherenceData, setAdherenceData] = useState([]);
  const [weeklyHistory, setWeeklyHistory] = useState([]);
  const [monthlyHistory, setMonthlyHistory] = useState([]);
  const [timeRange, setTimeRange] = useState("weekly");

  useEffect(() => {
    // Simulate API call to fetch adherence data
    const fetchAdherenceData = async () => {
      setTimeout(() => {
        setAdherenceData([
          {
            id: "med-1",
            name: "Lisinopril",
            adherenceRate: 95,
            missedDoses: 1,
            totalDoses: 30,
            streak: 14,
            trend: "stable",
          },
          {
            id: "med-2",
            name: "Metformin",
            adherenceRate: 85,
            missedDoses: 9,
            totalDoses: 60,
            streak: 5,
            trend: "improving",
          },
          {
            id: "med-3",
            name: "Vitamin D3",
            adherenceRate: 70,
            missedDoses: 9,
            totalDoses: 30,
            streak: 3,
            trend: "declining",
          },
        ]);

        const today = new Date();
        const weeklyData = [];
        for (let i = 6; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          weeklyData.push({
            date: date.toLocaleDateString("en-US", { weekday: "short" }),
            adherenceRate: Math.min(100, Math.max(60, 85 + Math.floor(Math.random() * 30) - 15)),
          });
        }
        setWeeklyHistory(weeklyData);

        const monthlyData = [];
        for (let i = 29; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          if (i % 3 === 0) {
            monthlyData.push({
              date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
              adherenceRate: Math.min(100, Math.max(60, 85 + Math.floor(Math.random() * 30) - 15)),
            });
          }
        }
        setMonthlyHistory(monthlyData);

        setLoading(false);
      }, 1500);
    };

    fetchAdherenceData();
  }, []);

  const calculateOverallAdherence = () => {
    if (adherenceData.length === 0) return 0;
    const sum = adherenceData.reduce((acc, med) => acc + med.adherenceRate, 0);
    return Math.round(sum / adherenceData.length);
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "improving":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "declining":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getTrendLabel = (trend) => {
    switch (trend) {
      case "improving":
        return "Improving";
      case "declining":
        return "Declining";
      default:
        return "Stable";
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[250px] w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  const overallAdherence = calculateOverallAdherence();

  return (
    <div className="space-y-6">
      {/* Adherence Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Medication Adherence Overview</CardTitle>
          <CardDescription>
            Track how consistently you're taking your medications as prescribed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Adherence Rate</span>
              <Badge
                className={`${
                  overallAdherence >= 90
                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                    : overallAdherence >= 75
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
                    : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                }`}
              >
                {overallAdherence >= 90
                  ? "Excellent"
                  : overallAdherence >= 75
                  ? "Good"
                  : "Fair"}
              </Badge>
            </div>
            <Progress value={overallAdherence} />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {adherenceData.map((medication) => (
              <Card key={medication.id}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{medication.name}</h3>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(medication.trend)}
                        <span className="text-xs">
                          {getTrendLabel(medication.trend)}
                        </span>
                      </div>
                    </div>
                    <Progress value={medication.adherenceRate} />
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>
                          {medication.totalDoses - medication.missedDoses}/
                          {medication.totalDoses} doses taken
                        </span>
                      </div>
                      <span className="font-medium">
                        {medication.adherenceRate}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Adherence History */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Adherence History</CardTitle>
            <Tabs
              value={timeRange}
              onValueChange={(value) => setTimeRange(value)}
            >
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={timeRange === "weekly" ? weeklyHistory : monthlyHistory}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="adherenceRate" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}