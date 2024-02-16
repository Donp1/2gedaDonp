import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";
import { useState } from "react";
import SortByModal from "../Modals/SortByModal";

const ConnectSearch = ({
  handleSearchResultContainerClick,
  handleInput,
  minValue,
  maxValue,
  gender,
  setGender,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter" && inputValue.length >= 1) {
  //     handleSearchResultContainerClick();
  //   }
  // };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="business-search-container">
      <div className="search-container-busi">
        <BiSearch />
        <input
          type="text"
          className="search-inp-bus"
          placeholder="Find event"
          value={inputValue}
          onChange={handleInputChange}
          // onKeyDown={handleKeyDown}
        />
      </div>
      {isFilterOpen && (
        <div className="modal-full-container">
          <SortByModal
            handleInput={handleInput}
            minValue={minValue}
            maxValue={maxValue}
            gender={gender}
            setGender={setGender}
            handleFilterClose={handleFilterClose}
          />
        </div>
      )}
      <div className="filter-search-bus" onClick={handleFilterClick}>
        <GoFilter />
      </div>
    </div>
  );
};

export default ConnectSearch;
