"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MedicationList } from "@/components/medications/medication-list";
import { MedicationSchedule } from "@/components/medications/medication-schedule";
import { MedicationAdherence } from "@/components/medications/medication-adherence";
import { MedicationForm } from "@/components/medications/medication-form";
import { MedicationInteractions } from "@/components/medications/medication-interactions";

export function MedicationDashboard() {
  const [showAddMedication, setShowAddMedication] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold">Medication Management</h2>
        <Button onClick={() => setShowAddMedication(!showAddMedication)}>
          <Plus className="mr-2 h-4 w-4" />
          {showAddMedication ? "Cancel" : "Add Medication"}
        </Button>
      </div>

      {/* Add Medication Form */}
      {showAddMedication && <MedicationForm onComplete={() => setShowAddMedication(false)} />}

      {/* Tabs Section */}
      <Tabs defaultValue="current">
        <TabsList className="mb-4">
          <TabsTrigger value="current">Current Medications</TabsTrigger>
          <TabsTrigger value="schedule">Reminder Schedule</TabsTrigger>
          <TabsTrigger value="adherence">Adherence Tracking</TabsTrigger>
          <TabsTrigger value="interactions">Interactions</TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="current">
          <MedicationList />
        </TabsContent>

        <TabsContent value="schedule">
          <MedicationSchedule />
        </TabsContent>

        <TabsContent value="adherence">
          <MedicationAdherence />
        </TabsContent>

        <TabsContent value="interactions">
          <MedicationInteractions />
        </TabsContent>
      </Tabs>
    </div>
  );
}