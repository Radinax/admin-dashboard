import { useGetProductsSummary } from "@/features/home/api/home.api";
import {
  HomeProductCreationSection,
  HomeQuickStatsSection,
  HomeWelcomeSection,
} from "@/features/home/components";

export function HomePage() {
  const product = useGetProductsSummary();
  console.log("PRODUCT", product);
  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <HomeWelcomeSection />
      <HomeQuickStatsSection />
      <HomeProductCreationSection />
    </div>
  );
}
