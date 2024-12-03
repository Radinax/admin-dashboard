import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableCell,
} from "@/components/ui/table";
import { ProductType } from "@/types/products";

export type ProductBody = {
  type: ProductType;
  name: string;
  price: string;
  description: string;
};

interface ProductsTableProps {
  headerList: string[];
  headerBody: ProductBody[];
}

export const ProductsTable = ({
  headerList,
  headerBody,
}: ProductsTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent products</TableCaption>
      <TableHeader>
        <TableRow>
          {headerList.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {headerBody.map((header, i) => (
          <TableRow key={`${header.name}+${i}`}>
            <TableCell>{header.name}</TableCell>
            <TableCell>{header.price}</TableCell>
            <TableCell>{header.type}</TableCell>
            <TableCell>{header.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
