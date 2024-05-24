import { useDispatch, useSelector } from "react-redux";
import { clearAllCompare } from "../../features/compare/compareSlice";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const toastStyles = {
  icon: "🚚",
  position: "top-right",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

const CompareBar = () => {
  const compareItems = useSelector((store) => store.compare.vehicles);
  const dispatch = useDispatch();
  const router = useRouter();


  function handleDeselect() {
    dispatch(clearAllCompare());
  }

  function handleRoute() {
    const firstKey = compareItems?.[0]?.id;
    const secKey = compareItems?.[1]?.id;
    const thirdKey = compareItems?.[2]?.id;
    const nonEmptyKeys = [];
    if (firstKey) nonEmptyKeys.push(`vehicle_one=${firstKey}`);
    if (secKey) nonEmptyKeys.push(`vehicle_two=${secKey}`);
    if (thirdKey) nonEmptyKeys.push(`vehicle_three=${thirdKey}`);

    const linkToRoute = `/compare${nonEmptyKeys.length > 0 ? `?${nonEmptyKeys?.join('&')}` : ''}`;
    if (compareItems?.length >= 2) {
      router.push(linkToRoute);
    } else {
      toast.error("Minimum of two vehicles required",{
        ...toastStyles
      });
    }
  }

  return compareItems.length ? (
    <div className="compare-bar">
      <div className="compare-info">
        Selected 0{compareItems?.length} Variants to Compare
      </div>
      <div className="button-container">
        <button onClick={handleDeselect} className="deselect-btn text-black">
          Deselect All
        </button>
        <button
          className="compare-btn bg-blue-1 text-white"
          onClick={handleRoute}
        >
          Compare
        </button>
      </div>
    </div>
  ) : null;
};

export default CompareBar;
