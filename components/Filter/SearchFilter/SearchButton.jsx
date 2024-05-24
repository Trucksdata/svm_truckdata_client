import { useRouter } from "next/router";
import React from "react";

function SearchButton({handleSearch}) {
  const router = useRouter();

  return (
    <div>
      <div className="button-item">
        <button
          className="mainSearch__submit button  py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 -blue-1 text-white"
          onClick={handleSearch}
        >
          Search
          <i className="icon-arrow-right text-20 ml-10" />
        </button>
      </div>
      {/* End search button_item */}
    </div>
  );
}

export default SearchButton;
