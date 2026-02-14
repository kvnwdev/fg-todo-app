"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Todo App</h1>
          <p className="text-muted-foreground">
            Built with Next.js and shadcn/ui
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Demonstrating the installed shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Button Component</h3>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Input Component</h3>
              <Input
                placeholder="Enter your task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && (
                <p className="text-sm text-muted-foreground">
                  You typed: {inputValue}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Checkbox Component</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={checked}
                  onCheckedChange={(checked) => setChecked(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {checked ? "Task completed!" : "Mark as complete"}
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              All components are ready to use
            </p>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              This Next.js project is configured with:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Next.js 16 with App Router</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>shadcn/ui components (Button, Checkbox, Card, Input)</li>
              <li>ESLint configuration</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
