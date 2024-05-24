import Link from "next/link";
import React from "react";

const DescriptionBox = ({ vehicle }) => {
  const vehicleNames = vehicle
    ?.map((item) => item?.vehicle?.title)
    ?.filter(Boolean);
  const defaultCompareText = `Compare two trucks of your choice with the best truck comparison tool in India . You can compare variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more of as many as 3 trucks at one go to help you make the right choice.`;
  const customCompareText = `Compare ${vehicleNames?.join(
    " vs "
  )} variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more`;

  const compareText = vehicleNames?.length
    ? customCompareText
    : defaultCompareText;

  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Compare Trucks",
    text: compareText,
    delayAnimation: "300",
  };

  return (
    <div
      className="col-lg-12 container  "
      key={item.id}
      data-aos="fade"
      data-aos-delay={item.delayAnimation}
    >
      <div className="rounded-4 view_bordershadow bg-white">
        <div className="d-flex flex-wrap y-gap-30">
          <div className="col-auto"></div>
          <div className="col">
            <div className="d-flex flex-column justify-center h-full px-30 py-20">
              <h3 className="text-22 fw-500">{item.title}</h3>
              <p className="text-15 mt-5">{item.text}</p>
              <Link
                href="#"
                className="d-block text-14 text-blue-1 fw-500 underline mt-5"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
