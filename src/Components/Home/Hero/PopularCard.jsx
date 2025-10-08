import { FaUserFriends } from "react-icons/fa";

const PopularCard = ({ d, index }) => {
  return (
    <div
      key={index}
      className="card card-compact bg-slate-800 rounded-md p-1 shadow-xl border border-slate-400 shadow-slate-900"
    >
      <div className="card-body">
        <img src={d?.icon} alt="Service" />
        <div className="">
          <h6 className="font-bold lg:text-[16px] md:text-[14px] text-[12px] my-1 text-center text-slate-300">
            Trip To {d?.title}
          </h6>
          <div className="flex justify-around items-center text-slate-400">
            <FaUserFriends className="text-[16px]" />
            <p className="text-[10px] md:text-[12px]">
              {d?.people} people going
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
