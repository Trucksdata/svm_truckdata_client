import React from "react";
import DetailBox from "./DetailBox";

const DetailCard = ({data}) => {
  return (
    <div className="col-lg-4">
      <div className="d-flex justify-end">
        <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
          <div className="row y-gap-15 items-center justify-between">
            <div className="col-auto">
              <div className="text-14 text-light-1">
                From
                <span className="text-20 fw-500 text-dark-1 ml-5">
                  US{data?.price}
                </span>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="text-14 text-right mr-10">
                  <div className="lh-15 fw-500">Exceptional</div>
                  <div className="lh-15 text-light-1">
                    {data?.numberOfReviews} reviews
                  </div>
                </div>
                {/* End div */}

                <div className="size-40 flex-center bg-yellow-1 rounded-4">
                  <div className="text-14 fw-600 text-dark-1">
                    {data?.ratings}
                  </div>
                </div>
                {/* End div */}
              </div>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-20">
            <DetailBox />
          </div>
          {/* End .row */}
        </div>
        {/* End px-30 */}
      </div>
      {/* End d-flex */}
    </div>
  );
};

export default DetailCard;
