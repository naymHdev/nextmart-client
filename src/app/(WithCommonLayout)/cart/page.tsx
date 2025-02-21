import CartProducts from "@/components/modules/cart/CartProducts"
import Coupon from "@/components/modules/cart/Coupon"
import ProductBanner from "@/components/modules/products/banner"
import NMContainer from "@/components/ui/core/NMContainer"


const CartPage = () => {
    return (
        <>
            <NMContainer>
                <ProductBanner title="Cart Page" path="Home - Cart Page" />
                <section className="grid grid-cols-12 gap-8 my-5">
                    <CartProducts />
                    <Coupon />
                </section>
            </NMContainer>
        </>
    )
}

export default CartPage