import { useState } from "react";
import { service } from "../../Assets/data/dataBank";

const CategoryCards = () => {
  const [index, setIndex] = useState(1);
  const { cards } = service;

  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
      {cards?.map((card, cardIndex) => {
        const { icon, title, subtitle } = card;
        return (
          <div key={cardIndex}>
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${
                index === cardIndex &&
                "bg-slate-900 border  border-yellow-300 text-yellow-300 shadow-yellow-300"
              } p-3 rounded-lg bg-slate-900 border  border-slate-300 text-center shadow-md cursor-pointer hover:shadow-yellow-300 hover:text-yellow-300 transition-all`}
            >
              <div className="mb-2">
                <img src={icon} alt="" className="w-16 h-16 mx-auto" />
              </div>
              <h4 className="mb-1 text-[20px] font-medium">{title}</h4>
              <p className="text-[14px] text-slate-600">{subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCards;
