import React from "react";
import Image from "./Image";
import { FiArrowLeft } from "react-icons/fi";

const CashApp = ({ onBack }: { onBack: () => void }) => {
  const downloadCashAppImage = () => {
    const link = document.createElement("a");
    link.href = "/images/cashapp-long.png";
    link.download = "cashapp.png";
    link.click();
  };

  return (
    <>
      <Image
        src="/images/cashapp-long.png"
        alt="Cash App"
        width={300}
        height={50}
      />
      <Image
        src="/images/download-cashapp.png"
        alt="Cash App"
        width={500}
        height={500}
      />
      <div className="flex w-full px-3 gap-3">
        <button
          onClick={onBack}
          className="flex w-auto items-center justify-center gap-x-2 p-3 rounded-full hover:gap-x-3 transition-all duration-300 border-2 border-neutral-500 hover:border-neutral-900"
        >
          <FiArrowLeft size={24} />
        </button>
        <button
          onClick={downloadCashAppImage}
          className="flex flex-grow items-center justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 transition-all duration-300 bg-neutral-900 text-white"
        >
          Download Cash App Image
        </button>
      </div>
    </>
  );
};

export default CashApp;
