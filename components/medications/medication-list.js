"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, Clock, Calendar, AlertCircle, MoreHorizontal, Check, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-hot-toast"; // Updated import

export function MedicationList() {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch medications
    const fetchMedications = async () => {
      setTimeout(() => {
        setMedications([
          {
            id: "med-1",
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            timeOfDay: ["Morning"],
            startDate: "2025-01-15",
            instructions: "Take with or without food.",
            prescribedBy: "Dr. Sarah Johnson",
            refillDate: "2025-04-15",
            pharmacy: "MedPlus Pharmacy",
            status: "active",
            type: "prescription",
          },
          {
            id: "med-2",
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice daily",
            timeOfDay: ["Morning", "Evening"],
            startDate: "2024-11-10",
            instructions: "Take with meals to reduce stomach upset.",
            prescribedBy: "Dr. Michael Chen",
            refillDate: "2025-05-10",
            pharmacy: "HealthRx",
            status: "active",
            type: "prescription",
          },
        ]);
        setLoading(false);
      }, 1500);
    };

    fetchMedications();
  }, []);

  const handleMarkTaken = (id) => {
    toast.success("Medication marked as taken. Your medication record has been updated.");
  };

  const handleDeleteMedication = () => {
    if (!selectedMedication) return;

    setMedications(medications.filter((med) => med.id !== selectedMedication.id));
    setShowDeleteDialog(false);
    setSelectedMedication(null);

    toast.success("Medication deleted. The medication has been removed from your list.");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "paused":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2].map((i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {medications.map((medication) => (
        <Card key={medication.id}>
          <CardHeader>
            <CardTitle>{medication.name}</CardTitle>
            <CardDescription>{medication.dosage}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{medication.instructions}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-sm btn-outline">
                <MoreHorizontal className="h-4 w-4" />
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button onClick={() => handleMarkTaken(medication.id)}>
                    <Check className="h-4 w-4" />
                    Mark as Taken
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedMedication(medication)}>
                    <AlertCircle className="h-4 w-4" />
                    View Details
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowDeleteDialog(true)}>
                    <X className="h-4 w-4" />
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}