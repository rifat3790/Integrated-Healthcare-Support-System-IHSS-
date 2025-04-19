"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, Search, Info, AlertCircle, Pill, Coffee, Pizza, Wine } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MedicationInteractions() {
  const [loading, setLoading] = useState(true);
  const [interactions, setInteractions] = useState([]);
  const [foodInteractions, setFoodInteractions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate API call to fetch interactions
    const fetchInteractions = async () => {
      setTimeout(() => {
        setInteractions([
          {
            id: "int-1",
            medications: ["Lisinopril", "Potassium supplements"],
            severity: "high",
            description:
              "Taking Lisinopril with potassium supplements can cause high potassium levels (hyperkalemia), which may lead to serious heart rhythm problems.",
            recommendation:
              "Avoid taking potassium supplements while on Lisinopril unless specifically directed by your doctor. Regular monitoring of potassium levels is recommended.",
          },
          {
            id: "int-2",
            medications: ["Metformin", "Ibuprofen"],
            severity: "moderate",
            description:
              "Regular use of NSAIDs like Ibuprofen while taking Metformin may increase the risk of lactic acidosis, a rare but serious side effect.",
            recommendation:
              "Occasional use of Ibuprofen is generally safe, but regular or high-dose use should be discussed with your healthcare provider.",
          },
          {
            id: "int-3",
            medications: ["Vitamin D3", "Calcium supplements"],
            severity: "low",
            description:
              "Vitamin D helps your body absorb calcium. Taking these together is often beneficial, but very high doses of both may lead to hypercalcemia in some cases.",
            recommendation:
              "This combination is generally safe and often recommended, but follow dosage guidelines and inform your doctor if you're taking both.",
          },
        ]);

        setFoodInteractions([
          {
            id: "food-1",
            medication: "Lisinopril",
            food: "High-potassium foods",
            effect:
              "Foods high in potassium (bananas, oranges, potatoes) may increase potassium levels when combined with Lisinopril.",
            recommendation: "Moderate your intake of high-potassium foods and monitor potassium levels regularly.",
            icon: Pizza,
          },
          {
            id: "food-2",
            medication: "Metformin",
            food: "Alcohol",
            effect:
              "Alcohol consumption while taking Metformin increases the risk of lactic acidosis and can affect blood sugar levels.",
            recommendation: "Limit alcohol consumption while taking Metformin.",
            icon: Wine,
          },
          {
            id: "food-3",
            medication: "Vitamin D3",
            food: "Caffeine",
            effect: "Excessive caffeine may decrease vitamin D absorption and contribute to calcium loss.",
            recommendation: "Moderate caffeine intake and consider taking vitamin D supplements with food.",
            icon: Coffee,
          },
        ]);

        setLoading(false);
      }, 1500);
    };

    fetchInteractions();
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "alert-error";
      case "moderate":
        return "alert-warning";
      case "low":
        return "alert-success";
      default:
        return "alert-info";
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-5 w-5" />;
      case "moderate":
        return <AlertCircle className="h-5 w-5" />;
      case "low":
        return <Info className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const filteredInteractions = interactions.filter((interaction) =>
    interaction.medications.some((med) => med.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredFoodInteractions = foodInteractions.filter(
    (interaction) =>
      interaction.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interaction.food.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-[100px]" />
        </div>
        <Tabs defaultValue="drug">
          <TabsList>
            <Skeleton className="h-10 w-[200px]" />
          </TabsList>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[150px] w-full" />
            ))}
          </div>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search medications or foods..."
            className="input input-bordered pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => setSearchTerm("")}
          className="btn btn-outline shrink-0"
        >
          Clear
        </button>
      </div>

      {/* Tabs for Drug and Food Interactions */}
      <Tabs defaultValue="drug">
        <TabsList>
          <TabsTrigger value="drug">Drug Interactions</TabsTrigger>
          <TabsTrigger value="food">Food Interactions</TabsTrigger>
        </TabsList>

        {/* Drug Interactions */}
        <TabsContent value="drug" className="mt-4 space-y-4">
          {filteredInteractions.length > 0 ? (
            filteredInteractions.map((interaction) => (
              <div key={interaction.id} className={`alert ${getSeverityColor(interaction.severity)} shadow-lg`}>
                <div>
                  {getSeverityIcon(interaction.severity)}
                  <div>
                    <h3 className="font-bold">{interaction.medications.join(" + ")}</h3>
                    <p>{interaction.description}</p>
                    <p className="font-medium">Recommendation: {interaction.recommendation}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <Pill className="mb-2 h-8 w-8 text-muted-foreground" />
              <h3 className="mb-1 text-lg font-medium">No interactions found</h3>
              <p className="text-sm text-muted-foreground">
                {searchTerm
                  ? `No drug interactions found for "${searchTerm}"`
                  : "No drug interactions detected between your current medications"}
              </p>
            </div>
          )}
        </TabsContent>

        {/* Food Interactions */}
        <TabsContent value="food" className="mt-4 space-y-4">
          {filteredFoodInteractions.length > 0 ? (
            filteredFoodInteractions.map((interaction) => (
              <Card key={interaction.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-amber-100 p-2 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
                      <interaction.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {interaction.medication} + {interaction.food}
                        </h3>
                        <p className="text-sm text-muted-foreground">{interaction.effect}</p>
                      </div>
                      <div className="rounded-md bg-amber-50 p-2 text-sm dark:bg-amber-950/50">
                        <span className="font-medium">Recommendation:</span> {interaction.recommendation}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
              <Coffee className="mb-2 h-8 w-8 text-muted-foreground" />
              <h3 className="mb-1 text-lg font-medium">No food interactions found</h3>
              <p className="text-sm text-muted-foreground">
                {searchTerm
                  ? `No food interactions found for "${searchTerm}"`
                  : "No significant food interactions detected for your current medications"}
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}