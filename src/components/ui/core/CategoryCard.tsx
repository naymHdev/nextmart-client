
import { ICategory } from "@/types/category.types";
import Image from "next/image";

const CategoryCard = ({ category }: { category: ICategory }) => {

    // console.log("-----------category",category.name);
    return (
        <div className="bg-white bg-opacity-50 border-neutral-300 border-2 rounded-full text-center p-6 h-44 shadow">
            <Image
                src={category?.icon}
                width={80}
                height={150}
                alt="category icon"
                className="mx-auto"
            />
            <h3 className="text-lg font-semibold truncate mt-3">{category?.name}</h3>
        </div>
    );
};

export default CategoryCard;