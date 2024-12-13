import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const ButtonSwiperFilter = ({
  filters,
  // sideParams,
  // setSideParams,
  // label,
  // specId,
}) => {
  // for start and guest rating code
  const [activeRating, setActiveRating] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const handleRatingClick = (rating) => {
    // const newRating = rating;
    // if (activeRating.includes(newRating)) {
    //   const updatedRatingArray = activeRating.filter((r) => r !== newRating);
    //   setActiveRating(updatedRatingArray);
    //   setSideParams({
    //     ...sideParams,
    //     [label]: updatedRatingArray,
    //     [`${label}_spec_id`]: updatedRatingArray.length > 0 ? specId : "",
    //   });
    // } else {
    //   setActiveRating([...activeRating, rating]);
    //   setSideParams({
    //     ...sideParams,
    //     [label]: [...activeRating, rating],
    //     [`${label}_spec_id`]: specId,
    //   });
    // }
    // setRefresh((refresh) => refresh + 1);
  };

  return (
    <>
      <div className="row x-gap-10 y-gap-10 pt-10">
        {[
          { label: 1, value: 1 },
          { label: 2, value: 1 },
          { label: 3, value: 1 },
          { label: 4, value: 1 },
          { label: 5, value: 1 },
          { label: 6, value: 1 },
          { label: 7, value: 1 },
        ].map((filter) => {
          return (
            <SwiperSlide key={filter.label}>
              <div>{filter.label}</div>
            </SwiperSlide>
          );
        })}
      </div>
      {/* End .col-auto guest ratings */}
    </>
  );
};

export default ButtonSwiperFilter;
