"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const payment_intent = searchParams.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/confirm/${payment_intent}`,
          {
            method: "PUT",
          }
        );
        router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, [payment_intent, router]);

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do
      not close the page.
    </div>
  );
};

export default SuccessPage;
