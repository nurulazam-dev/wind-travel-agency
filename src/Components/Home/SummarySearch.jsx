// import { summaryData } from "../../Assets/data/dataBank";
import { IoHomeOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

const SummarySearch = () => {
  // const { data } = summaryData;
  const data = [
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
    <div className="bg-slate-200/30 rounded-xl m-6 ml-0 p-5 flex items-center w-full">
      <div className="shadow flex justify-between gap-8 items-center w-full bg-slate-200/80 rounded-xl px-5 py-3">
        {data?.map((data) => {
          const { icon, title, subtitle } = data;
          return (
            <div className="flex justify-between items-center gap-4">
              <div className="text-slate-500 text-2xl">{icon}</div>
              <div>
                <h4 className="text-[12px]">{title}</h4>
                <h3 className="text-[12px] font-[500]">{subtitle}</h3>
              </div>
              {data?.rightBorder}
            </div>
          );
        })}
      </div>
      <div>
        <button className="btn btn-primary ml-4 text-white bg-yellow-600 hover:bg-yellow-700 px-4 py-3 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default SummarySearch;
