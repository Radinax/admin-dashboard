import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";

export function CustomTrigger() {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={open ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {open ? (
              <ArrowRightIcon className="h-5 w-5" />
            ) : (
              <ArrowLeftIcon className="h-5 w-5" />
            )}
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content
          side="right"
          className="bg-gray-900 text-white text-sm px-2 py-1 rounded"
        >
          {open ? "Expand" : "Collapse"}
          <Tooltip.Arrow className="fill-gray-900" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
