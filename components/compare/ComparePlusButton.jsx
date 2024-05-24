import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ComparePlusButton = ({ index, vehicle, handleClear }) => {
  const currentItem = vehicle?.find((item) => item.index === index);
  const logo = currentItem?.vehicle
    ? currentItem?.vehicle?.images?.[0]?.thumbnail
    : "";

    const [screen, setScreen] = useState(250);

  useEffect(() => {
    const updateScreenSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setScreen(100);
      } else if (screenWidth < 960) {
        setScreen(150);
      } else {
        setScreen(250);
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const router = useRouter();
  function handleImageRouter() {
    if (currentItem?.vehicle?.id) {
      router.push(`/details/${currentItem?.vehicle?.id}`);
    }
  }

  return (
    <div
      className={`d-flex position-relative  justify-content-center  mb-xl-4 ${
        currentItem?.vehicle?.id ? "cursor-pointer" : "cursor-none"
      }   `}
    >
      <Image
        src={logo || "/img/compare/truck-compare.svg"}
        alt="illustration"
        width={250}
        height={200}
        style={{ objectFit: "fill", width: "100%", height: screen }}
        className="  "
        onClick={handleImageRouter}
      />
      {logo && (
        <button
          className="position-absolute top-0 end-0 p-2 btn-close rounded-circle text-black"
          aria-label="Close"
          onClick={() => {
            handleClear();
          }}
        ></button>
      )}
    </div>
  );
};

export default ComparePlusButton;
