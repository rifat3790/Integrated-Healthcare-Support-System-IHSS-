"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pill, Clock, Check, BellOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-hot-toast"; 

export function MedicationSchedule() {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState({});
  const [activeDay, setActiveDay] = useState("today");

  useEffect(() => {
    // Simulate API call to fetch medication schedule
    const fetchSchedule = async () => {
      setTimeout(() => {
        setSchedule({
          today: [
            {
              id: "rem-1",
              medicationId: "med-1",
              medicationName: "Lisinopril",
              dosage: "10mg",
              time: "08:00",
              taken: true,
            },
            {
              id: "rem-2",
              medicationId: "med-2",
              medicationName: "Metformin",
              dosage: "500mg",
              time: "08:00",
              taken: false,
            },
          ],
          tomorrow: [
            {
              id: "rem-3",
              medicationId: "med-3",
              medicationName: "Vitamin D3",
              dosage: "2000 IU",
              time: "08:00",
              taken: false,
            },
          ],
        });
        setLoading(false);
      }, 1500);
    };

    fetchSchedule();
  }, []);

  const handleMarkTaken = (reminderId) => {
    setSchedule((prevSchedule) => {
      const newSchedule = { ...prevSchedule };
      Object.keys(newSchedule).forEach((day) => {
        newSchedule[day] = newSchedule[day].map((reminder) =>
          reminder.id === reminderId ? { ...reminder, taken: true } : reminder
        );
      });
      return newSchedule;
    });

    toast.success("Medication marked as taken. Your medication record has been updated.");
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-[200px]" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[150px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-[100px]" />
                  <div className="space-y-2">
                    {[1, 2].map((j) => (
                      <Skeleton key={j} className="h-16 w-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs value={activeDay} onValueChange={setActiveDay}>
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
        </TabsList>

        {Object.keys(schedule).map((day) => (
          <TabsContent key={day} value={day}>
            <Card>
              <CardHeader>
                <CardTitle>{day === "today" ? "Today's" : "Tomorrow's"} Medication Schedule</CardTitle>
                <CardDescription>
                  {day === "today"
                    ? new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
                    : new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {schedule[day].length > 0 ? (
                  <div className="space-y-6">
                    {schedule[day].map((reminder) => (
                      <Card key={reminder.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`rounded-full p-2 ${
                                  reminder.taken
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                }`}
                              >
                                <Pill className="h-4 w-4" />
                              </div>
                              <div>
                                <div className="font-medium">{reminder.medicationName}</div>
                                <div className="text-sm text-muted-foreground">{reminder.dosage}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {reminder.taken ? (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                                  <Check className="mr-1 h-3 w-3" />
                                  Taken
                                </Badge>
                              ) : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-green-600 dark:text-green-400"
                                  onClick={() => handleMarkTaken(reminder.id)}
                                >
                                  <Check className="mr-1 h-4 w-4" />
                                  Mark as Taken
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <BellOff className="mb-2 h-8 w-8 text-muted-foreground" />
                    <h3 className="mb-1 text-lg font-medium">No medications scheduled</h3>
                    <p className="text-sm text-muted-foreground">
                      There are no medications scheduled for {day === "today" ? "today" : "tomorrow"}.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}