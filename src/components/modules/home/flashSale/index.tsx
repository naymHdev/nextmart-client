import { Button } from '@/components/ui/button'
import NMContainer from '@/components/ui/core/NMContainer'
import Link from 'next/link'
import React from 'react'
import CountDown from './CountDown'
import { getFlashSaleProducts } from '@/services/FlashSale'
import ProductCard from '@/components/ui/core/ProductCard'
import { IProduct } from '@/types/product.type'

const FlashSale = async () => {

    const { data: products } = await getFlashSaleProducts();


    return (
        <>
            <div className="bg-white bg-opacity-50 py-10">
                <NMContainer>
                    <div className="flex items-center justify-between">
                        <div className=' flex items-center gap-8'>
                            <h2 className="font-bold text-2xl">Flash Sale</h2>
                            <CountDown />
                        </div>
                        <Link href="/products">
                            <Button variant="outline" className="rounded-full">
                                All Products
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-10">
                        {products?.slice(0, 4)?.map((product: IProduct, idx: number) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                    </div>
                </NMContainer>
            </div>
        </>
    )
}

export default FlashSale