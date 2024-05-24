
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Social from "../common/social/Social";
import Image from "next/image";
import dynamic from "next/dynamic";

const ContactInfo = dynamic(() => import('./ContactInfo'), {
  ssr: false,
})

const MobileMenu = (props) => {
  const { vehicleData, logoImage } = props;
  const router = useRouter();

  const closeCanvas = () => {
    document.querySelector('.fix-icon').click();
  };

  function handleRoute (id) {
    router.push(`/details/${id}`)
    closeCanvas()
  }

  const isClient = typeof window !== "undefined";
  const generalData = isClient ? localStorage?.getItem("general-data") : null;
  const general = JSON.parse(generalData);
  const {
    email,
    contact_number,
    facebook_url, instagram_url, youtube_url, twitter
  } = general || {};
  const contact = { email, contact_number };
  const socials = { facebook_url, instagram_url, youtube_url, twitter };

  

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        {logoImage ? (
          <Image alt="logo" src={logoImage} width={100} height={100} />
        ) : (
          <Link href="/">TrucksData</Link>
        )}
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
            <MenuItem
              component={
                <Link
                  href="/"
                  className={router.pathname === "/" ? "menu-active-link" : ""}
                />
              }
            >
              Home
            </MenuItem>
            {/* End  All Home Menu */}
            
            {/* vehicle type menu */}
            {vehicleData?.map((vehicle) =>
              vehicle["status"] === "active" ? (
                <SubMenu label={vehicle["name"]} key={vehicle["id"]}>
                  {vehicle["manufacturers"].map((manufacturer) => (
                    <SubMenu
                      label={manufacturer["name"]}
                      key={manufacturer["id"]}
                    >
                      {manufacturer["series"].map((series, i) => {
                        if (series?.vehicle_type_id === Number(vehicle?.id)) {
                          return (
                            <SubMenu
                              label={series.title}
                              key={series.title + i}
                            >
                              {series?.vehicles?.map((model, i) => (
                                <MenuItem onClick={() => handleRoute(model?.id)} key={model.title + i}>
                                  {model.title}
                                </MenuItem>
                              ))}
                            </SubMenu>
                          );
                        }
                      })}
                    </SubMenu>
                  ))}
                </SubMenu>
              ) : null
            )}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo contact={contact} />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social socials={socials} />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
