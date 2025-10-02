import { sell } from "../../Assets/data/dataBank";
import { FaLocationArrow } from "react-icons/fa6";

const DestinationsCards = () => {
  const { cards } = sell;

  return (
    <>
      <div className="flex flex-col  lg:flex-row mx-5 justify-center items-center">
        {cards.map((card) => {
          const { icon, title, price, subtitle } = card;
          return (
            <div className="bg-slate-100 shadow-2xl mx-5 rounded-2xl text-slate-700 font-semibold">
              <img
                src={icon}
                alt="Service"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="mt-3 text-[16px] text-justify px-3 flex justify-between mb-2">
                <p>{title}</p>
                <p>${price}k</p>
              </div>
              <div className="flex items-center gap-2 px-3 mb-5 text-justify">
                <FaLocationArrow className="text-xl mr-1" />
                <p className="text-[15px]">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DestinationsCards;
