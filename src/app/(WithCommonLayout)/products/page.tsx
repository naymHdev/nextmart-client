import ProductBanner from '@/components/modules/products/banner'
import NMContainer from '@/components/ui/core/NMContainer'
import React from 'react'

const AllProductsPage = () => {
    return (
        <>
            <NMContainer>
                <ProductBanner title='All Products' path='Home - Products' />
                <div>
                </div>
            </NMContainer>
        </>
    )
}

export default AllProductsPage