import React, { useState } from "react";
import Image from "@/common/components/Image";
import CashApp from "@/common/components/CashApp";
import PaymentMethodButton from "./PaymentMethodButton";

const BuyACoffe = () => {
  const [showCashApp, setShowCashApp] = useState<boolean>(false);

  const handleShowCashApp = () => {
    setShowCashApp(!showCashApp);
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center space-y-3">
      {!showCashApp ? (
        <div className="flex flex-col w-full justify-center items-center space-y-3">
          <button
            className="flex justify-center border border-solid w-full px-5 py-3 rounded-xl hover:bg-gray-100"
            onClick={handleShowCashApp}
          >
            <Image
              src="/images/cashapp-logo.png"
              alt="Cash App"
              width={70}
              height={50}
            />
          </button>
          <PaymentMethodButton
            href="https://www.paypal.com/paypalme/GuillermoNavarro01"
            imageSrc="/images/next.svg"
            altText="Paypal"
          />
        </div>
      ) : (
        <CashApp onBack={handleShowCashApp} />
      )}
    </div>
  );
};

export default BuyACoffe;
