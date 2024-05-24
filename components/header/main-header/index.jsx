'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineCompare } from "react-icons/md";
import MainMenu from "../MainMenu";
import SearchBoxContent from "../../Filter/SearchFilter/SearchBoxContent";
import MobileMenu from "../MobileMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import useVehicleTypes from "../../../services/useVehicleTypes";
import { setVehiclesType } from "../../../features/vehicleType/vehicleTypeSlice";

const MainHeader = () => {
  const dispatch = useDispatch();

  const [general, setGeneral] = useState();
  useEffect(() => {
    const hasData = window && !!window.localStorage["general-data"];
    if (hasData) {
      const generalData = hasData ? localStorage.getItem("general-data") : null;
      const generalItems = hasData ? JSON.parse(generalData) : {};
      setGeneral(generalItems);
    }
  }, []);

  const logoImage = general?.logo?.[0]?.original;
  const router = useRouter();
  const isHome = router.asPath === "/";
  const [navbar, setNavbar] = useState(!isHome);

  const { data: vehicle } = useVehicleTypes();
  const vehicleData = vehicle?.data?.data || []
  dispatch(setVehiclesType(vehicle?.data["data"]));

  const changeBackground = () => {
    if (window.scrollY >= 10 || !isHome) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  function handleCompareRoute() {
    router.push("/compare");
  }

  return (
    <>
      {" "}
      <header className={`header  ${navbar ? "is-sticky bg-white" : ""}`}>
        <div className="header__container header__container-1500 mx-auto px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="  mr-50">
                  {!logoImage && <h3>TrucksData</h3>}
                  {logoImage && (
                    <Image
                      src={logoImage}
                      width={100}
                      height={100}
                      alt="logo"
                    />
                  )}
                </Link>
                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" vehicleData={vehicleData} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex items-center">
                {/* <div className="mr-15 xxl:d-none d-flex">
                  <button
                    className="text-26 text-dark-1"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop"
                    aria-controls="offcanvasTop"
                  >
                    <div className="icon-search"></div>
                  </button>
                </div> */}
                <div
                  className="offcanvas offcanvas-top vh-100"
                  tabIndex={-1}
                  id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel"
                >
                  <div className="offcanvas-header position-absolute top-0 end-0">
                    <button
                      type="button"
                      className="btn-close text-reset "
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <SearchBoxContent />
                </div>

                <div className="xxl:d-none">
                  <LanguageMegaMenu textClass="text-black" />
                </div>

                <div className="d-none xl:d-flex x-gap-20 items-center pl-30">
                  <div
                    className="d-flex items-center text-inherit text-22 menu__nav -is-active"
                    onClick={handleCompareRoute}
                  >
                    <MdOutlineCompare />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu
                        vehicleData={vehicleData}
                        logoImage={logoImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
