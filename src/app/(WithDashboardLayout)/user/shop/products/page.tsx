import ManageProducts from "@/components/modules/shop/product";
import { getAllProducts } from "@/services/product";

const ManageProductsPage = async () => {
  const { data } = await getAllProducts();
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
};

export default ManageProductsPage;
