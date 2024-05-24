import Link from "next/link";
import { useSelector } from "react-redux";

const FooterContent = () => {
  const vehicleData = useSelector((store) => store.vehicle.vehicleType);
  return (
    <>
      {vehicleData?.map((item) => (
        item.status === 'active' &&
        <div className="col-xl-2 col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.name}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.manufacturers.map((menu, i) => (
              <Link href="#" key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
