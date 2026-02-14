import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Todo App</h1>
          <p className="text-muted-foreground">
            Next.js app with shadcn/ui components
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Demo of installed shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Button Component</h3>
              <div className="flex gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Input Component</h3>
              <Input placeholder="Enter text here..." />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Checkbox Component</h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
