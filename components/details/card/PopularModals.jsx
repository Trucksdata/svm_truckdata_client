import Link from "next/link";
import React from "react";

function PopularModals({ vehicleDetails, popularModels, manufacturer, type }) {
  const filteredPopularVehicle = popularModels?.filter(
    (item) => item.title !== vehicleDetails?.title
  );
  return filteredPopularVehicle && filteredPopularVehicle.length !== 0 ? (
    <div className="px-20 py-20 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
      <div className="text-black-1 fw-500">
        Popular {type} By {manufacturer}
      </div>
      <div className="py-10 w-100">
        {filteredPopularVehicle?.slice(0, 5).map((item) => (
          <Link key={item.id} href={`/details/${item?.id}`}>
            <div className="d-flex py-5 align-items-center">
              <div className="w-25 h-25">
                <img src={item?.images?.[0]?.thumbnail} alt="truck image" />
              </div>
              <div className="ps-3">
                <div className="text-black-1 fw-500">{item.title}</div>
                <div className="text-light-1 fw-400 text-15">
                ₹{item?.max_price.split('.')[0]}{" "}-{" "}₹{item?.min_price.split('.')[0]}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPopularVehicle?.length > 5 ? (
        <div className="d-flex justify-content-end">
          <a href="#" className="text-14 text-blue-1 underline">
            View All
          </a>
        </div>
      ) : null}
    </div>
  ) : null;
}

export default PopularModals;
