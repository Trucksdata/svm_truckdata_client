import Link from "next/link";
// import footerDataContent from "../../../data/footerContent";
import { useSelector } from "react-redux";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { useRouter } from "next/router";

const FooterContent = ({ type }) => {
  const vehicleData = useSelector((store) => store.vehicle.vehicleType);

  const router = useRouter();
  function handleRoute(idToRoute) {
    router.push(`/brands/${idToRoute}`);
  }

  const bgColor = type === "white" ? "#FAF9F6" : "#051036";
  const textColor = type === "white" ? "black" : "white";

  return (
    <>
      {vehicleData?.map(
        (item) =>
          item.status === "active" && (
            <div className=" displayInMedium " key={item.id}>
              <h5 className="text-16 fw-500 mb-30">{item.name}</h5>
              <div className="d-flex y-gap-10 flex-column">
                {item.manufacturers.map((menu, i) => (
                  <Link href={`/brands/${menu?.id}`} key={i}>
                    {menu.name}
                  </Link>
                ))}
              </div>
            </div>
          )
      )}
      <div className="displayInMobile">
        <ProSidebarProvider>
          <Sidebar
            width={"100%"}
            backgroundColor={bgColor}
            style={{ borderColor: bgColor }}
          >
            <Menu>
              {vehicleData?.map((vehicle) =>
                vehicle["status"] === "active" ? (
                  <SubMenu
                    style={{
                      padding: 2,
                      backgroundColor: bgColor,
                      border: 0,
                      borderColor: bgColor,
                      color: textColor,
                    }}
                    label={vehicle["name"]}
                    key={vehicle["id"]}
                  >
                    {vehicle["manufacturers"].map((manufacturer, i) => {
                      return (
                        <MenuItem
                          style={{
                            backgroundColor: bgColor,
                            border: 0,
                            borderColor: bgColor,
                            color: textColor,
                          }}
                          onClick={() => handleRoute(manufacturer?.id)}
                          key={manufacturer.name + i}
                        >
                          {manufacturer.name}
                        </MenuItem>
                      );
                    })}
                  </SubMenu>
                ) : null
              )}
            </Menu>
          </Sidebar>
        </ProSidebarProvider>
      </div>
    </>
  );
};

export default FooterContent;
