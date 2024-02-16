import { AiOutlineRight } from "react-icons/ai";
import ActionButton from "../Commons/Button";
import MultiRangeSlider from "multi-range-slider-react";

const SortByModal = ({
  handleFilterClose,
  handleInput,
  minValue,
  maxValue,
  gender,
  setGender,
}) => {
  return (
    <div className="sort-modal-container">
      <div className="sort-by-reset flex">
        <div className="sort-by-txt">Sort by</div>
        <div className="reset-txt">Reset</div>
      </div>
      <hr className="line-ran"></hr>
      <div className="gender-sel">
        <div className="gend-txt">Gender</div>
        <div className="gen-sel-bx flex">
          <div
            onClick={() => setGender("female")}
            className={`gend-btn flex ${gender == "female" && "activ-gend"}`}
          >
            Female
          </div>
          <div
            onClick={() => setGender("male")}
            className={`gend-btn flex ${gender == "male" && "activ-gend"}`}
          >
            Male
          </div>
          <div
            onClick={() => setGender("others")}
            className={`gend-btn flex ${gender == "others" && "activ-gend"}`}
          >
            Others
          </div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div style={{ paddingTop: 5, paddingBottom: 5 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            fontSize: 15,
            marginBottom: 10,
          }}
        >
          {minValue}/{maxValue}
        </div>
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
          ruler={false}
          label={false}
          style={{ padding: 0, border: 0 }}
          barInnerColor="#aaa"
        />
      </div>
      <hr className="line-ran"></hr>

      <div className="loca-row-cont">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Location</div>
          <div className="show-all-bx flex">
            <div className="so-all-txt">Show all</div>
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <hr className="line-ran"></hr>

      <div className="verify-acc-container">
        <div className="sort-by-reset flex">
          <div className="gend-txt">Verified Account</div>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="apply-btn-cont flex" onClick={handleFilterClose}>
        <ActionButton label={"Apply"} />
      </div>
    </div>
  );
};

export default SortByModal;
