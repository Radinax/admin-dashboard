import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HomeWelcomeSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to Your Dashboard
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Manage your products, track your inventory, and grow your business
          effortlessly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">
          Get started by navigating to the{" "}
          <strong className="text-gray-800 dark:text-gray-400">Products</strong>{" "}
          section to create, edit, or delete products. Use the sidebar to
          explore other features.
        </p>
        <Button
          asChild
          className="mt-4 bg-gray-800 hover:bg-gray-600 text-white"
        >
          <Link to="/app/products">Go to Products</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
