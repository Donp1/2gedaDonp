import { useEffect, useState } from "react";
import MainLayout from "../../Layout/MainLayout";
import SwipeableViews from "react-swipeable-views";
// import DashMessage from "../../components/Dashboard/DasMess";
// import Follower from "../../components/Dashboard/Follower";
import "./style.css";
import ConnectSearch from "../../components/ConnectComp/ConnectSearch";
import SelectCategory from "../../components/Dashboard/SelectCategory";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GiShare } from "react-icons/gi";
import ProfileStick from "../../components/Commons/ProfileStick";
import SearchBusinessCard from "../../components/SearchComp/SearchBusinessCard";
import BusinessStick from "../../components/Commons/BusinessStick";
import ClamBuss from "../BussinessDirectory/ClamBuss";
import Follower from "components/Dashboard/Follower";
import DashMessage from "components/Dashboard/DasMess";
import { getConnects, getUserById, sortConnects } from "./functions";
import ConnectItem from "./ConnectItem";

const Data = [
  {
    text: "People nearby",
  },
  {
    text: "Businesses nearby",
  },
];

const Connect = () => {
  const [activeTab, setActiveTab] = useState("People nearby");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isBussinessOpen, setIsBussinessOpen] = useState(false);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [isClaimModalOpenOne, setIsClaimModalOpenOne] = useState(false);
  const [isClaimModalOpenTwo, setIsClaimModalOpenTwo] = useState(false);
  const [isClaimModalOpenThree, setIsClaimModalOpenThree] = useState(false);
  const [isClaimModalOpenDone, setIsClaimModalOpenDone] = useState(false);

  const [connects, setConnects] = useState([
    {
      cover_image: {
        id: 55,
        cover_image: "https://i.pravatar.cc/50?img=3" || "/images/pic1.png",
        user: 27,
      },
      media: [
        {
          id: 69,
          profile_image: "https://picsum.photos/500?random=1",
          user: 18,
        },
        {
          id: 71,
          profile_image: "https://picsum.photos/500?random=2",
          user: 18,
        },
      ],
      username: "Donp",
      full_name: "Joseph Precious",
      bio: null || "No bio Available...",
    },
    {
      cover_image: {
        id: 55,
        cover_image: "https://i.pravatar.cc/50?img=4" || "/images/pic1.png",
        user: 27,
      },
      media: [
        {
          id: 69,
          profile_image: "https://picsum.photos/500?random=3",
          user: 18,
        },
        {
          id: 69,
          profile_image: "https://picsum.photos/500?random=4",
          user: 18,
        },
        {
          id: 71,
          profile_image: "https://picsum.photos/500?random=5",
          user: 18,
        },
      ],
      username: "Donflexy",
      full_name: "Samuel Peters",
      bio: null || "No bio Available...",
    },
    {
      cover_image: {
        id: 55,
        cover_image: "https://i.pravatar.cc/50?img=5" || "/images/pic1.png",
        user: 27,
      },
      media: [
        {
          id: 69,
          profile_image: "https://picsum.photos/500?random=6",
          user: 18,
        },
        {
          id: 69,
          profile_image: "https://picsum.photos/500?random=7",
          user: 18,
        },
        {
          id: 71,
          profile_image: "https://picsum.photos/500?random=8",
          user: 18,
        },
        {
          id: 71,
          profile_image: "https://picsum.photos/500?random=9",
          user: 18,
        },
        {
          id: 71,
          profile_image: "https://picsum.photos/500?random=10",
          user: 18,
        },
      ],
      username: "Donflexy",
      full_name: "Samuel Peters",
      bio: null || "No bio Available...",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const [minValue, set_minValue] = useState(18);
  const [maxValue, set_maxValue] = useState(100);
  const [gender, setGender] = useState("");

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleClaimClickDone = (e) => {
    e.preventDefault();
    setIsClaimModalOpenDone(true);
  };
  const handleClaimClickCloseDone = () => {
    setIsClaimModalOpenDone(false);
    setIsClaimModalOpenThree(false);
    setIsClaimModalOpenTwo(false);
    setIsClaimModalOpenOne(false);
    setIsClaimModalOpen(false);
  };

  const handleClaimClickThree = (e) => {
    e.preventDefault();
    setIsClaimModalOpenThree(true);
  };
  const handleClaimClickCloseThree = () => {
    setIsClaimModalOpenThree(false);
  };
  const handleClaimClickTwo = (e) => {
    e.preventDefault();
    setIsClaimModalOpenTwo(true);
  };
  const handleClaimClickCloseTwo = () => {
    setIsClaimModalOpenTwo(false);
  };
  const handleClaimClickOne = (e) => {
    e.preventDefault();
    setIsClaimModalOpenOne(true);
  };
  const handleClaimClickCloseOne = () => {
    setIsClaimModalOpenOne(false);
  };
  const handleClaimClick = () => {
    setIsClaimModalOpen(true);
  };
  const handleClaimClickClose = () => {
    setIsClaimModalOpen(false);
  };

  const handleBussinessClose = () => {
    setIsBussinessOpen(false);
  };

  const handleBussinessClick = () => {
    setIsBussinessOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleTabClick = (text) => {
    setActiveTab(text);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const token = localStorage.getItem("authTOken");
      const my_connects = await getConnects(token);
      // setConnects(my_connects);
      console.log(my_connects);
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <ClamBuss
        handleClaimClickDone={handleClaimClickDone}
        handleClaimClickCloseDone={handleClaimClickCloseDone}
        handleClaimClickThree={handleClaimClickThree}
        handleClaimClickCloseThree={handleClaimClickCloseThree}
        handleClaimClickTwo={handleClaimClickTwo}
        handleClaimClickCloseTwo={handleClaimClickCloseTwo}
        handleClaimClickOne={handleClaimClickOne}
        handleClaimClickCloseOne={handleClaimClickCloseOne}
        handleClaimClickClose={handleClaimClickClose}
        handleClaimClick={handleClaimClick}
        isClaimModalOpen={isClaimModalOpen}
        isClaimModalOpenOne={isClaimModalOpenOne}
        isClaimModalOpenTwo={isClaimModalOpenTwo}
        isClaimModalOpenThree={isClaimModalOpenThree}
        isClaimModalOpenDone={isClaimModalOpenDone}
      />
      <div className="home-container">
        <MainLayout>
          <div className="main-containe bus-box-con">
            <div className="left-side-container buss-all-container">
              {isProfileOpen && (
                <ProfileStick handleProfileClose={handleProfileClose} />
              )}
              {isBussinessOpen && (
                <BusinessStick handleBussinessClose={handleBussinessClose} />
              )}
              {!isProfileOpen && !isBussinessOpen && (
                <>
                  <div>
                    <div className="head-line bus-dir">Connect</div>
                    <ConnectSearch
                      handleInput={handleInput}
                      minValue={minValue}
                      maxValue={maxValue}
                      gender={gender}
                      setGender={setGender}
                    />
                    <br />
                    <img src="images/jumia.png" alt="" className="ads-img" />
                  </div>
                  <div className="select-what-display w-dis">
                    {Data.map((item, index) => (
                      <div
                        key={index}
                        className={`tab-item ${
                          item.text === activeTab
                            ? "sel-act connect-tab"
                            : "anot-wid add-bor  connect-tab"
                        }`}
                        onClick={() => handleTabClick(item.text)}
                      >
                        <div className="dis-sel-name conn-t-txt">
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {activeTab === "People nearby" ? (
                    <div className="content_container">
                      {loading ? (
                        <div className="connect_loader w-full">
                          <h4 className="text-center text-[#fff] w-full">
                            Loading Connects...
                          </h4>
                        </div>
                      ) : connects?.length > 0 ? (
                        <SwipeableViews
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          enableMouseEvents
                        >
                          {connects?.map((connect, index) => (
                            <ConnectItem key={index} connect={connect} />
                          ))}
                        </SwipeableViews>
                      ) : (
                        <h4 className="text-center text-[#fff] w-full">
                          No People Nearby To Display. Kindly Update your
                          location
                        </h4>
                      )}
                    </div>
                  ) : null}

                  {activeTab === "Businesses nearby" ? (
                    <div className="csss">
                      <div className=" you-may-know-bo">
                        <div className="may-know-box">
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                          <SearchBusinessCard
                            handleClaimClick={handleClaimClick}
                            handleBussinessClick={handleBussinessClick}
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              )}
            </div>

            <div className="middle-side-container mvmm">
              <img
                className=""
                style={{ height: "100vh" }}
                src="images/ads1.png"
                alt=""
              />
            </div>
            <div className="right-side-container">
              {/* <SelectCategory /> */}
              <Follower />
              <div className="mess-bxx-conn">
                <DashMessage />
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default Connect;
