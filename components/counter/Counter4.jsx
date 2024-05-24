const Counter4 = () => {
  const blockContent = [
    {
      id: 1,
      number: "4,958",
      meta: "Trucks",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "269",
      meta: "Tippers",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "200",
      meta: "Pick-ups",
      hasUnit: "",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "574",
      meta: "Trailers",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="py-60 sm:py-30 text-center">
            <div className="text-40 lg:text-30 lh-13 text-dark-1 fw-600">
              {item.number}
              {item.hasUnit}
            </div>
            <div className="text-14 lh-14 text-light-1 mt-10">{item.meta}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter4;
