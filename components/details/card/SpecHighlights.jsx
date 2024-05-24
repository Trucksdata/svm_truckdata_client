import Image from "next/image";

const SpecHighlights = ({ keyspecs }) => {
  const propertyContent = [
    {
      id: 1,
      icon: "/icons/power.svg",
      name: "Power",
      content: "180 HP",
    },
    {
      id: 2,
      icon: "/icons/weight.svg",
      name: "Gross Vehicle Weight (Kg)",
      content: "41500 KG",
    },
    {
      id: 3,
      icon: "/icons/engine.svg",
      name: "Engine",
      content: "H-Series 6 cylinder",
    },
    {
      id: 4,
      icon: "/icons/fuel-tank.svg",
      name: "Fuel tank (Litres)",
      content: "160 Ltr",
    },
    {
      id: 5,
      icon: "/icons/tyre.svg",
      name: "No. of Tyres",
      content: "6+1",
    },
    {
      id: 6,
      icon: "/icons/truck-wheel.svg",
      name: "Wheelbase",
      content: "205mm",
    },
  ];

  const multipleSpec = ['Loading Span (ft) / Loading Capacity (Cu.M)', 'Variant Options']

  const showIconUrl = (title) => {
    const item = propertyContent.find((item) => item.name === title);
    const url = item?.icon;
    return url ? url : "/icons/truck-wheel.svg";
  };
  return (
    <div>
      <div className="row y-gap-30 justify-between pt-30">
        {keyspecs?.slice(0, 6)?.map((item) => {
          if (item?.values?.length) {
            const hasMultiple = multipleSpec?.includes(item?.specification?.name)
          const valueToDisplay =  item.values.map((obj) => obj.value)
            return (
              <div className="col-md-auto col-6" key={item.id}>
                <div className="d-block text-center">
                  <Image
                    src={showIconUrl(item?.specification?.name)}
                    width={26}
                    height={26}
                    alt={"icon"}
                  />
                  <div className="text-15 lh-15">
                    <span className=" fw-semibold ">
                      {item?.specification?.name}
                    </span>
                    <br /> {hasMultiple ? valueToDisplay?.join(',') : valueToDisplay?.[0] }
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SpecHighlights;
