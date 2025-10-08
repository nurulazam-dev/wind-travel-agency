import { mostPopularData, searchBarData } from "../../../Assets/data/dataBank";
import bgImg from "../../../Assets/images/hero/hero-bg-img.png";
import HeroSearchBar from "./HeroSearchBar";
import PopularCard from "./PopularCard";

const Hero = () => {
  const { title, data } = mostPopularData;

  return (
    <div
      className="mb-14 pt-5 text-slate-600"
      style={{ background: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div className="px-4 py-5">
        <p className="md:text-[14px] text-[12px] lg:text-[16px] font-semibold uppercase text-slate-700 tracking-wide">
          Mountains | Plains | Beaches
        </p>
        <div className="lg:text-6xl md:text-5xl text-3xl font-bold max-w-2xl text-slate-800 tracking-normal">
          <h3>Spend your vacation with our activities</h3>
        </div>
        {/* ======Most Popular Card======= */}
        <div className="my-6 mt-2 py-4">
          <h4 className="uppercase text-[24px] font-bold text-slate-800 mb-2">
            {title}
          </h4>
          <div className="flex gap-y-[30px] flex-row gap-4 lg:gap-6">
            {data?.map((d, index) => (
              <PopularCard d={d} index={index} />
            ))}
          </div>
        </div>
        {/* =======Search Bar part======= */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/40 rounded-xl m-6 ml-0 p-5 flex flex-col  lg:flex-row items-center w-full border border-yellow-400 shadow-lg shadow-slate-700">
            <div className="shadow flex flex-col lg:flex-row justify-between gap-8 items-center w-full bg-slate-900/90 rounded-xl px-5 py-3">
              {searchBarData?.map((data, index) => (
                <HeroSearchBar data={data} index={index} />
              ))}
            </div>
            <div>
              <button className="btn btn-primary ml-3 mt-4 lg:mt-0 text-white bg-yellow-600 hover:bg-yellow-700 px-5 py-3 rounded-lg">
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
