import { Edit, Plus, Trash2 } from "lucide-react";
import React from "react";

interface RowProps {
  name: string;
  type: string;
  price: number;
}

const Row: React.FC<RowProps> = ({ name, type, price }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300 w-full">
      <div className="flex flex-row gap-40">
        <span className="font-semibold">{name}</span>
        <span className="text-gray-500">{type}</span>
        <span className="text-gray-700">${price.toFixed(2)}</span>
      </div>
      <div className="flex space-x-4">
        <Plus className="cursor-pointer text-gray-600 hover:text-blue-500" />
        <Edit className="cursor-pointer text-gray-600 hover:text-blue-500" />
        <Trash2 className="cursor-pointer text-gray-600 hover:text-red-500" />
      </div>
    </div>
  );
};

export default Row;