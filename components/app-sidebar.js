"use client";

import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  Calendar,
  FileText,
  Heart,
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Pill,
  Stethoscope,
  Syringe,
  Target,
  Users,
  Video,
} from "lucide-react";

export function AppSidebar() {
  const navigationItems = [
    {
      category: "Main",
      items: [
        { name: "Dashboard", href: "/Dashboard", icon: LayoutDashboard },
        { name: "Home", href: "/", icon: Home },
      ],
    },
    {
      category: "Health Management",
      items: [
        { name: "Appointments", href: "/Dashboard/Appointments", icon: Calendar },
        { name: "Prescriptions", href: "/Dashboard/Prescriptions", icon: FileText },
        { name: "Test Results", href: "/Dashboard/test-results", icon: FileText },
        { name: "Health Tracker", href: "/Dashboard/health-tracker", icon: Heart },
        { name: "Medications", href: "/Dashboard/medications", icon: Pill },
      ],
    },
    {
      category: "Services",
      items: [
        { name: "Telemedicine", href: "/dashboard/telemedicine", icon: Video },
        { name: "Find Doctors", href: "/dashboard/find-doctors", icon: Stethoscope },
        { name: "Health Resources", href: "/dashboard/health-resources", icon: BookOpen },
        { name: "Health Tips", href: "/dashboard/health-tips", icon: BookOpen },
        { name: "Insurance", href: "/dashboard/insurance", icon: FileText },
        { name: "Family Health", href: "/dashboard/family", icon: Users },
        { name: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: 3 },
      ],
    },
    {
      category: "Health Tools",
      items: [
        { name: "Emergency", href: "/dashboard/emergency", icon: AlertTriangle },
        { name: "Symptom Checker", href: "/dashboard/symptom-checker", icon: Stethoscope },
        { name: "Vaccinations", href: "/dashboard/vaccinations", icon: Syringe },
        { name: "Medication Checker", href: "/dashboard/medication-checker", icon: Pill },
        { name: "Health Goals", href: "/dashboard/health-goals", icon: Target },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-base-100 shadow-md">
      <div className="p-4 text-center text-xl font-bold text-primary">HealthConnect</div>
      <ul className="menu p-4">
        {navigationItems.map((group) => (
          <div key={group.category} className="mb-4">
            <h3 className="mb-2 px-4 text-xs font-medium text-gray-500">{group.category}</h3>
            {group.items.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center gap-2 hover:bg-primary hover:text-white">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto inline-flex items-center rounded-full bg-primary px-2 py-1 text-xs font-medium text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </div>
        ))}
        <li>
          <Link href="/" className="flex items-center gap-2 hover:bg-primary hover:text-white">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}