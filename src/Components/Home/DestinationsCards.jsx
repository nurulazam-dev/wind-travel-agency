import { FaLocationArrow } from "react-icons/fa6";

const DestinationsCards = ({ index, card }) => {
  return (
    <div
      key={index}
      className="bg-slate-900 shadow-sm shadow-yellow-300 rounded-2xl text-slate-300 font-semibold"
    >
      <img
        src={card?.icon}
        alt="Service"
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="mt-3 text-[16px] text-justify px-3 flex justify-between mb-2">
        <p>{card?.title}</p>
        <p>${card?.price}k</p>
      </div>
      <div className="flex items-center gap-2 px-3 mb-5 text-justify">
        <FaLocationArrow className="text-xl mr-1" />
        <p className="text-[15px]">{card?.subtitle}</p>
      </div>
    </div>
  );
};

export default DestinationsCards;
