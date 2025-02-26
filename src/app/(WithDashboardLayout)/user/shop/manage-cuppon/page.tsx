import CouponTable from "@/components/modules/shop/manage-coupon/CouponTable";
import CreateCouponModal from "@/components/modules/shop/manage-coupon/CreateCouponModal";
import { getCuppons } from "@/services/coupon";

const ManageCupponPage = async () => {
  const { data: coupons, meta } = await getCuppons();

  // console.log("coupons__", coupons, "meta__", meta);

  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Manage Coupon</h1>
          <CreateCouponModal />
        </div>
        <div>
          <CouponTable coupons={coupons} meta={meta} />
        </div>
      </div>
    </>
  );
};

export default ManageCupponPage;
