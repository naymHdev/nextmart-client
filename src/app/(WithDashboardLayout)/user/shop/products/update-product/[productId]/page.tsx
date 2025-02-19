import UpdateProductForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleProduct } from "@/services/product";

const UpdateProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleProduct(productId);

  //   console.log(product);

  return (
    <>
      <div className="flex items-center justify-center">
        <UpdateProductForm product={product} />
      </div>
    </>
  );
};

export default UpdateProductPage;
