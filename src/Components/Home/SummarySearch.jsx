import { summaryData } from "../../Assets/data/dataBank";

const SummarySearch = () => {
  const { data } = summaryData;

  return (
    <div className="bg-slate-200/50 rounded-xl m-2 p-5 flex items-center lg:w-full sm:w-75">
      <div className="stats shadow">
        {data?.map((data) => {
          const { icon, errIcon, title, subtitle } = data;
          return (
            <div className="stat flex items-center">
              <div>
                <img src={icon} alt="" />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold">{title}</h4>
                <h3 className="text-[16px] font-bold">{subtitle}</h3>
              </div>
              <div>
                <img src={errIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-3 text-white btn-warning">
          Search
        </button>
      </div>
    </div>
  );
};

export default SummarySearch;
