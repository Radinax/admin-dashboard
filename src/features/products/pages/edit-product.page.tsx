import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { useProduct } from "../api/products.api";
import { ProductForm } from "../components/product-form/product-form";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "@/components";

export function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: product, isLoading } = useProduct(id!);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="container mx-auto py-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">Product not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Card>
        <CardHeader>
          <CardTitle>Edit Product: {product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm 
            initialData={product} 
            onSuccess={() => navigate("/products")} 
          />
        </CardContent>
      </Card>
    </div>
  );
}
