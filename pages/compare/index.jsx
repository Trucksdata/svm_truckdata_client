"use client";
import Seo from "../../components/common/Seo";
import CompareBox from "../../components/compare/CompareBox";
import DescriptionBox from "../../components/compare/DescriptionBox";
import CompareLocationTop from "../../components/compare/location/CompareLocationTop";
import CallToActions from "../../components/common/CallToActions";
import MainHeader from "../../components/header/main-header";
import { useState } from "react";
import Footer from '../../components/footer/footer';

const ComparePage = () => {

  const isClient = typeof window !== "undefined";
  const screenWidth = isClient ? window.innerWidth : null;
  const defaultValues = [
    {
      index: 1,
    },
    {
      index: 2,
    },
    ...(screenWidth > 576
      ? [
          {
            index: 3,
          },
        ]
      : []),
  ];

  const [vehicle, setVehicle] = useState(defaultValues);

  return (
    <div className="position-relative   ">
      <Seo pageTitle={"Compare"} />
      <div className="header-margin"></div>
      <MainHeader />
      <CompareLocationTop />
      <DescriptionBox vehicle={vehicle}  />
      <CompareBox vehicle={vehicle} setVehicle={setVehicle} />
      <CallToActions />
      <Footer className="text-dark" type={'white'} />
    </div>
  );
};
export default ComparePage;
