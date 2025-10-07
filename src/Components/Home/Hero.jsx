import { mostPopularData } from "../../Assets/data/dataBank";
import bgImg from "../../Assets/images/hero/hero-bg.png";
import planeImg from "../../Assets/images/hero/plane.png";
import { FaUserFriends } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

const Hero = () => {
  const { title, leftErrIcon, data } = mostPopularData;
  const summarySearchData = [
    {
      icon: <IoHomeOutline />,
      title: "Accommodation",
      subtitle: "Aklan,Boracay",
      rightBorder: <div className="border h-8 border-slate-400 ml-6"></div>,
    },
    {
      icon: <LuCalendarDays />,
      title: "Check-in",
      subtitle: "04.03.2022",
      rightBorder: <div className="border h-8 border-slate-400 ml-6"></div>,
    },
    {
      icon: <LuCalendarDays />,
      title: "Check-Out",
      subtitle: "04.13.2022",
      rightBorder: <div className="border h-8 border-slate-400 ml-6"></div>,
    },
    {
      icon: <FiUsers />,
      title: "Guests",
      subtitle: "2Adults",
    },
  ];
  return (
    <div
      className="mb-10 text-slate-600"
      style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="px-4 py-5">
        <p className="md:text-[14px] text-[12px] lg:text-[16px] font-semibold uppercase text-white">
          Mountains | Plains | Beaches
        </p>
        <div className="lg:text-[47px] md:text-[35px] text-[25px] font-bold text-white">
          <h3>Spend your vacation</h3>
          <div className="flex items-center">
            <h3>with our activities</h3>
            <img src={planeImg} alt="" className="w-12 md:w-24" />
          </div>
        </div>
        {/* MostPopularCard section */}
        <div className="my-6 py-4">
          <div className="flex justify-between">
            <h4 className="uppercase text-[24px] font-bold text-white">
              {title}
            </h4>
            <img src={leftErrIcon} alt="" className="mr-2 pr-3" />
          </div>
          <div className="flex gap-y-[30px] flex-row gap-3">
            {data?.map((data) => {
              const { icon, people, title } = data;
              return (
                <div className="card card-compact bg-slate-200 rounded-md p-1 shadow-xl">
                  <div className="card-body">
                    <img src={icon} alt="Service" />
                    <div className="">
                      <h6 className="font-bold lg:text-[16px] md:text-[14px] text-[12px] my-1 text-center">
                        Trip To {title}
                      </h6>
                      <div className="flex justify-around items-center">
                        <FaUserFriends className="text-[16px] text-slate-700" />
                        <p className="text-[10px] md:text-[12px] text-slate-600">
                          {people} people going
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* =======SummarySearch ======= */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-200/30 rounded-xl m-6 ml-0 p-5 flex flex-col  lg:flex-row items-center w-full">
            <div className="shadow flex flex-col lg:flex-row justify-between gap-8 items-center w-full bg-slate-200/80 rounded-xl px-5 py-3">
              {summarySearchData?.map((data) => {
                const { icon, title, subtitle } = data;
                return (
                  <div className="flex justify-between items-center gap-4">
                    <div className="text-slate-500 text-2xl">{icon}</div>
                    <div>
                      <h4 className="text-[12px]">{title}</h4>
                      <h3 className="text-[12px] font-[500]">{subtitle}</h3>
                    </div>
                    <div className="hidden lg:block">{data?.rightBorder}</div>
                  </div>
                );
              })}
            </div>
            <div>
              <button className="btn btn-primary ml-4 mt-4 lg:mt-0 text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-3 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
