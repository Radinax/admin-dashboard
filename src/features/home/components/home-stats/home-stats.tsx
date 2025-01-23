import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function HomeQuickStatsSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Quick Stats
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Here's a snapshot of your current data.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Products
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            12
          </p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Total Revenue
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            $1,200
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
