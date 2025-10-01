import { mostPopularData } from "../../Assets/data/dataBank";
import { FaUserFriends } from "react-icons/fa";

const MostPopularCard = () => {
  const { title, leftErrIcon, data } = mostPopularData;

  return (
    <div className="my-6 py-4">
      <div className="flex justify-between">
        <h4 className="uppercase text-[24px] font-bold text-white">{title}</h4>
        <img src={leftErrIcon} alt="" className="mr-2 pr-3" />
      </div>
      <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[15px]">
        {data?.map((data) => {
          const { icon, people, title } = data;
          return (
            <div className="card card-compact bg-slate-200 rounded-md p-1 shadow-xl mr-6">
              <div className="card-body">
                <img src={icon} alt="Service" />
                <div className="">
                  <h6 className="font-bold text-[16px] my-1 text-center">
                    Trip To {title}
                  </h6>
                  <div className="flex justify-around items-center">
                    <FaUserFriends className="text-[16px] text-slate-700" />
                    <p className="text-[12px] text-slate-600">
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
  );
};

export default MostPopularCard;
