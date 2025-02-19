
import { ICategory } from "@/types/category.types";
import Image from "next/image";

const CategoryCard = ({ category }: { category: ICategory }) => {

    // console.log("-----------category",category.name);
    return (
        <div className="bg-white bg-opacity-50 border-2 border-white rounded-2xl text-center p-6 h-44">
            <Image
                src={category?.icon}
                width={100}
                height={150}
                alt="category icon"
                className="mx-auto"
            />
            <h3 className="text-lg font-semibold truncate mt-3">{category?.name}</h3>
        </div>
    );
};

export default CategoryCard;