import Image from "next/image";
import Link from "next/link";
import React from "react";
import carsData from "../../../data/cars";

const MoreVehicles = () => {
  return (
    <div className="sidebar -blog">
      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mt-10 mb-10">Recent Posts</h5>
        <div className="row y-gap-20 pt-10">
          {carsData.slice(3, 6).map((item) => (
            <div className="col-12" key={item.id}>
              <div className="d-flex items-center">
                <Image
                  width={85}
                  height={75}
                  className=" size-75 rounded-8"
                  src={item.slideImg?.[0]}
                  alt="image"
                />

                <div className="ml-15">
                  <h5 className="text-15 lh-15 fw-500">
                    <Link href={`/details/${item.id}`}>{item.title}</Link>
                  </h5>
                  <div className="text-13 lh-1 mt-5">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreVehicles;
