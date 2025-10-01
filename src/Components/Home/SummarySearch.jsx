import { summaryData } from "../../Assets/data/dataBank";

const SummarySearch = () => {
  const { data } = summaryData;

  return (
    <div className="bg-slate-200/50 rounded-xl m-2 p-4 flex items-center w-full">
      <div className="shadow flex justify-between items-center w-full bg-slate-200/80 rounded-xl p-5">
        {data?.map((data) => {
          const { icon, errIcon, title, subtitle } = data;
          return (
            <div className="flex items-center gap-2">
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
