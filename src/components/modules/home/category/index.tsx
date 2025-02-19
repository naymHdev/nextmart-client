import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types/category.types";
import Link from "next/link";

const CategorySection = async () => {
    const { data: categories } = await getAllCategories();

    return (
        <>
            <NMContainer className="my-20">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-2xl">Category</h2>
                    <Link href="/products">
                        <Button variant="outline" className="rounded-full">
                            View All
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-6 gap-8 my-5">
                    {categories
                        .map((category: ICategory, idx: number) => (
                            <CategoryCard key={idx} category={category} />
                        ))}
                </div>
            </NMContainer>
        </>
    );
};

export default CategorySection;
