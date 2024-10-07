import React from "react";

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">No Data Available</h2>
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default EmptyState;
