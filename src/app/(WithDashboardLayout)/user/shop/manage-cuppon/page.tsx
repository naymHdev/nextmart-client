import CouponTable from "@/components/modules/shop/manage-coupon/CouponTable";
import CreateCouponModal from "@/components/modules/shop/manage-coupon/CreateCouponModal";

const ManageCupponPage = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl">Manage Coupon</h1>
          <CreateCouponModal />
        </div>
        <div>
          <CouponTable
            coupons={[]}
            meta={{ page: 1, limit: 10, total: 100, totalPage: 10 }}
          />
        </div>
      </div>
    </>
  );
};

export default ManageCupponPage;
