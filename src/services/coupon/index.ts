"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const createCoupon = async (data: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidateTag("CUPPON");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// get Products Cuppons
export const getCuppons = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon`, {
      next: {
        tags: ["CUPPON"],
      },
    });
    const data = await res.json();
    // console.log("response", data);
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};