import { useState } from "react";

const BrandIntro = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 545;
  const truncatedDescription = description?.substring(0, maxLength);
  return (
    <>
      {description ? (
        <div className="col-xl-8">
          <p className="text-15 text-dark-1">
            {showMore ? description : truncatedDescription}
            {description.length > maxLength && (
              <span>
                {" "}
                <a
                  href="#"
                  className="text-14 fw-500 text-blue-1 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? " Show less" : " Show more"}
                </a>
              </span>
            )}
          </p>
        </div>
      ) : null}
    </>
  );
};

export default BrandIntro;
