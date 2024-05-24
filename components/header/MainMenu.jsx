import Link from "next/link";
import { categorieMegaMenuItems } from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import { useRouter } from "next/router";
import { truckList } from "../../data/truckList";
import { useRef, useState } from "react";

const MainMenu = ({ style = "", vehicleData }) => {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState("");

  function handleHover(vehicle) {
    
    setHoveredId(vehicle?.id);
  }

  /* Generate categorylist for each vehicle type */
  const categoriesList = (vehicle) => {
    const truckBrandsList = [];
    const series = [];
    vehicle["manufacturers"].map((brand, index) => {
      const brands = { id: index, brand: brand["name"] };
      truckBrandsList.push(brands);
      let seriesItem = [];
      brand["series"].map((item, i) => {
        seriesItem.push(item);
      });
      const models = { id: index, brand: brand["name"], series: seriesItem };
      series.push(models);
    });

    return (
      <CategoriesMegaMenu
        itemList={truckBrandsList}
        categorieMegaMenuItems={categorieMegaMenuItems}
        vehicleModels={series}
        vehicleId={hoveredId}
      />
    );
  };
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        {vehicleData?.map((vehicle) =>
          vehicle["status"] === "active" ? (
            <li
              className="menu-item-has-children -has-mega-menu"
              key={vehicle["id"]}
              onMouseEnter={() => handleHover(vehicle)}
              onMouseLeave={() => handleHover(null)}
            >
              <a href="#">
                <span className="mr-10">{vehicle["name"]}</span>
                {vehicle?.manufacturers?.length !== 0 ? (
                  <i className="icon icon-chevron-sm-down" />
                ) : null}
              </a>
              {vehicle?.manufacturers?.length !== 0 ? (
                <div className="mega" >{categoriesList(vehicle)}</div>
              ) : null}
            </li>
          ) : null
        )}
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/compare">Compare</Link>
        </li>
        {/* <li className={router.pathname === "/compare" ? "current" : ""}>
          <div
            onClick={() => router.push("/compare")}
            className=""
          >
            Compare
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
