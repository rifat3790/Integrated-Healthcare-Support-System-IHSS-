"use client";

import Link from "next/link";
import { MessageSquare, Shield } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Shield className="h-5 w-5 text-primary" />
            <span className="hidden md:inline-block">HealthConnect</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/messages" className="relative">
            <MessageSquare className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
            <span className="sr-only">Messages</span>
          </Link>
          <div className="rounded-full bg-gray-200 h-8 w-8 flex items-center justify-center">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}