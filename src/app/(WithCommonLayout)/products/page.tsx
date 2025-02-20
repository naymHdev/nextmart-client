import AllProducts from '@/components/modules/products';
import ProductBanner from '@/components/modules/products/banner'
import CategoryCard from '@/components/ui/core/CategoryCard';
import NMContainer from '@/components/ui/core/NMContainer'
import { getAllCategories } from '@/services/Category';
import { getAllProducts } from '@/services/product';
import { ICategory } from '@/types/category.types';
import React from 'react'

const AllProductsPage = async () => {
    const { data: categories } = await getAllCategories();
    const { data: products } = await getAllProducts();
    return (
        <>
            <NMContainer>
                <ProductBanner title='All Products' path='Home - Products' />
                <h2 className="text-xl font-bold my-5">Featured Collection </h2>
                <div className="grid grid-cols-6 gap-6">
                    {categories?.map((category: ICategory, idx: number) => (
                        <CategoryCard key={idx} category={category} />
                    ))}
                </div>

                <AllProducts products={products} />
            </NMContainer>
        </>
    )
}

export default AllProductsPage