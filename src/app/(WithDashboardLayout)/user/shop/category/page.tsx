import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/Category";

const ProductcategoryPage = async () => {
  const { data } = await getAllCategories();

  return (
    <>
      <div>
        <ManageCategories categories={data} />
      </div>
    </>
  );
};

export default ProductcategoryPage;
