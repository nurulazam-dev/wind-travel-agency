import { mostPopularData, summarySearchData } from "../../Assets/data/dataBank";
import bgImg from "../../Assets/images/hero/hero-bg-img.png";
import { FaUserFriends } from "react-icons/fa";

const Hero = () => {
  const { title, data } = mostPopularData;

  return (
    <div
      className="mb-14 text-slate-600"
      style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
      // style={{ background: `url(${bgImg})` }}
    >
      <div className="px-4 py-5">
        <p className="md:text-[14px] text-[12px] lg:text-[16px] font-semibold uppercase text-slate-700 tracking-wide">
          Mountains | Plains | Beaches
        </p>
        <div className="lg:text-6xl md:text-5xl text-3xl font-bold max-w-2xl text-slate-800 tracking-normal">
          <h3>Spend your vacation with our activities</h3>
        </div>
        {/* MostPopularCard section */}
        <div className="my-6 py-4">
          <h4 className="uppercase text-[24px] font-bold text-white mb-2">
            {title}
          </h4>

          <div className="flex gap-y-[30px] flex-row gap-3">
            {data?.map((data) => (
              <div className="card card-compact bg-slate-200 rounded-md p-1 shadow-xl">
                <div className="card-body">
                  <img src={data?.icon} alt="Service" />
                  <div className="">
                    <h6 className="font-bold lg:text-[16px] md:text-[14px] text-[12px] my-1 text-center">
                      Trip To {data?.title}
                    </h6>
                    <div className="flex justify-around items-center">
                      <FaUserFriends className="text-[16px] text-slate-700" />
                      <p className="text-[10px] md:text-[12px] text-slate-600">
                        {data?.people} people going
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* =======SummarySearch ======= */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-200/30 rounded-xl m-6 ml-0 p-5 flex flex-col  lg:flex-row items-center w-full">
            <div className="shadow flex flex-col lg:flex-row justify-between gap-8 items-center w-full bg-slate-200/80 rounded-xl px-5 py-3">
              {summarySearchData?.map((data) => (
                <div className="flex justify-between items-center gap-4">
                  <div className="text-slate-500 text-2xl">{data?.icon}</div>
                  <div>
                    <h4 className="text-[12px]">{data?.title}</h4>
                    <h3 className="text-[12px] font-[500]">{data?.subtitle}</h3>
                  </div>
                  <div className="hidden lg:block">{data?.rightBorder}</div>
                </div>
              ))}
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
