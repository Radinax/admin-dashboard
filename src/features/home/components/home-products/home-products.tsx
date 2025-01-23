import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HomeProductCreationSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
          How to Create a Product
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Follow these steps to add a new product to your inventory.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-800 dark:text-gray-400">
              Step 1:
            </strong>{" "}
            Go to the{" "}
            <strong className="text-gray-800 dark:text-gray-400">
              Products
            </strong>{" "}
            section using the sidebar or the button below.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-800 dark:text-gray-400">
              Step 2:
            </strong>{" "}
            Click on the{" "}
            <strong className="text-gray-800 dark:text-gray-400">
              Create Product
            </strong>{" "}
            button.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-gray-800 dark:text-gray-400">
              Step 3:
            </strong>{" "}
            Fill out the form with the product details:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <strong className="text-gray-800 dark:text-gray-400">
                Name:
              </strong>{" "}
              A unique name for your product (up to 100 characters).
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-400">
                Type:
              </strong>{" "}
              Choose the type of product from the available options.
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-400">
                Price:
              </strong>{" "}
              Enter a positive number (up to $10,000).
            </li>
            <li>
              <strong className="text-gray-800 dark:text-gray-400">
                Description:
              </strong>{" "}
              (Optional) Add a description for your product.
            </li>
          </ul>
        </div>
        <Button
          asChild
          className="mt-4 bg-gray-800 hover:bg-gray-600 text-white"
        >
          <Link to="/app/products">Create a Product</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
