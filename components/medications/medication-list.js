"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { MoreHorizontal, Check, X, AlertCircle } from "lucide-react";

export function MedicationList() {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedication, setSelectedMedication] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
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

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i} className="card bg-base-100 shadow-md p-4 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {medications.map((medication) => (
        <div key={medication.id} className="card bg-base-100 shadow-md">
          <div className="card-body">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="card-title">{medication.name}</h2>
                <p className="text-sm text-gray-500">{medication.dosage}</p>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline">
                  <MoreHorizontal className="h-4 w-4" />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
                  <li>
                    <button onClick={() => handleMarkTaken(medication.id)}>
                      <Check className="h-4 w-4" /> Mark as Taken
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setSelectedMedication(medication)}>
                      <AlertCircle className="h-4 w-4" /> View Details
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setSelectedMedication(medication);
                        setShowDeleteDialog(true);
                      }}
                    >
                      <X className="h-4 w-4" /> Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-2">{medication.instructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
