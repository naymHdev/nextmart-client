import { Button } from "@/components/ui/button"
import { IProduct } from "@/types/product.type"
import { Star } from "lucide-react"
import Image from "next/image"


const ProductDetails = ({ product }: { product: IProduct }) => {
    return (
        <>
            <div className="border rounded-3xl my-10 grid grid-cols-2 gap-8 p-4">
                <div>
                    <Image src={product.imageUrls[0]} alt="Product Image" width={500} height={500} className=" rounded-md w-full object-cover" />
                    <div className="grid grid-cols-3 gap-4">
                        {
                            product.imageUrls?.map((img, idx) => <Image key={idx} src={img} alt="Product Image" width={200} height={100} className=" rounded-md w-full object-cover" />)
                        }
                    </div>
                </div>
                <div className="bg-white rounded-md p-4">
                    <h2 className="font-bold text-xl mb-4">{product?.name}</h2>
                    <p className="text-justify text-gray-500 font-light text-sm">
                        {product?.description}
                    </p>
                    <div className="flex items-center justify-between my-5 text-gray-500 text-xs">
                        <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
                            <Star className="w-4 h-4" fill="orange" stroke="orange" />
                            {product?.averageRating} Ratings
                        </p>
                        <p className="rounded-full px-4 py-1 bg-gray-100">
                            Stock: {product?.stock}
                        </p>
                        <p className="rounded-full px-4 py-1 bg-gray-100">
                            Brand: {product?.brand?.name}
                        </p>
                        <p className="rounded-full px-4 py-1 bg-gray-100">
                            Category: {product?.category?.name}
                        </p>
                    </div>
                    <hr />
                    <p className="my-2 font-bold">
                        Price:{" "}
                        {product?.offerPrice ? (
                            <>
                                <span className="font-semibold mr-2 text-orange-400">
                                    $ {product?.offerPrice}
                                </span>
                                <del className="font-semibold text-xs">$ {product?.price}</del>
                            </>
                        ) : (
                            <span className="font-semibold">$ {product?.price}</span>
                        )}
                    </p>
                    <hr />

                    <Button variant="outline" className="w-full my-5">
                        Add To Cart
                    </Button>
                    <Button className="w-full">Buy Now</Button>
                </div>
            </div>
        </>
    )
}

export default ProductDetails