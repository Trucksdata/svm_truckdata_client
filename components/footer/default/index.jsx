import dynamic from "next/dynamic";
import AppButton from "./AppButton";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

const ContactInfo = dynamic(() => import("./ContactInfo"), {
  ssr: false,
});

const index = () => {
  return (
    <footer className="footer -type-3 footerContainer">
      <div
      // className="container"
      >
        <div
        // className="d-flex pt-60 pb-60 ps-2"
        >
          <div
            // className="row y-gap-40 justify-between xl:justify-start"
            className="d-flex pt-60 pb-60 justify-content-between sm:flex-column md:flex-column ps-4 pe-4 px-sm-5"
          >
            <div
            // className="col-xl-2 col-lg-4 col-sm-6"
            >
              <h5 className="text-16 fw-500 mb-30">Contact Us</h5>
              <ContactInfo />
            </div>
            {/* End col */}

            <FooterContent  />
            {/* End footer menu content */}

            {/* <div className="col-xl-4 col-lg-4 col-sm-6">
              <h5 className="text-16 fw-500 mb-30">Get Updates & More</h5>
              <Subscribe />
            </div> */}
          </div>
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-white-15 ps-4 pe-4 px-sm-5">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
