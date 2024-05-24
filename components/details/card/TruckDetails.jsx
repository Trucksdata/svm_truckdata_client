import React from "react";

function TruckDetails() {
  return (
    <div className="px-30 py-30 rounded-4 border-light shadow-4 bg-white w-360 lg:w-full">
      <div className="row y-gap-15 items-center justify-between">
        <div className="col-auto">
          <h6>Ashok Leyland Ecomet Star 1100</h6>
          <div className="">
            <div className="text-16 text-black-1">₹ 28.12 - 29.19 lakh *</div>
            <div className="d-flex">
              <p className="ps-1 text-15">Ex-showroom</p>
              <div className="text-blue text-14 ps-3">Select location</div>
            </div>
            <div>Agriculture Application</div>
            <div className="d-flex">
              <div className="text-14">Be the first to rate</div>
              <a href="#" className="text-14 text-blue-1 underline ps-5">
                Rate now
              </a>
            </div>
            <div className="d-flex pt-2">
              <button className="btn btn-primary ms-2 ">Enquiry</button>
              <button className="btn btn-success ms-2">call</button>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex items-center">
            {/* <div className="text-14 text-right mr-10"> */}
            {/* <div className="lh-15 fw-500">Exceptional</div> */}
            {/* <div className="lh-15 text-light-1"> */}
            {/* {car?.numberOfReviews} reviews */}
            {/* </div> */}
            {/* </div> */}

            {/* <div className="size-40 flex-center bg-yellow-1 rounded-4">e */}
            {/* <div className="text-14 fw-600 text-dark-1"> */}
            {/* {car?.ratings} */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TruckDetails;
