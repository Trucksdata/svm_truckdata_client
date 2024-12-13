import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import trucksData from "../../data/upcoming-trucks";
import CompareTwoVehicleBox from "./CompareTwoVehicleBox";
import CompareTwoVehicleBoxIndividual from "./CompareTwoVehicleBoxIndividual";

const CompareTwoVehiclesCardIndividual = ({
  comparisonData,
  vehicleDetails,
}) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {comparisonData?.map((item) => (
          <SwiperSlide key={item.id}>
            <CompareTwoVehicleBoxIndividual
              item={{ ...item, compare_vehicle: vehicleDetails }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-20 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        {/* <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div> */}
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default CompareTwoVehiclesCardIndividual;
