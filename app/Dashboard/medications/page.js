"use client";

import { MedicationDashboard } from "@/components/medications/medication-dashboard";

export default function MedicationsPage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Medications</h1>
        <p className="text-muted-foreground">
          Manage your medications, set reminders, and track your adherence
        </p>
      </div>

      {/* Medication Dashboard */}
      <MedicationDashboard />
    </div>
  );
}