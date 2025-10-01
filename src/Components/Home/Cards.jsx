import { useState } from "react";
import { service } from "../../Assets/data/dataBank";

const Cards = () => {
  const [index, setIndex] = useState(1);
  const { cards } = service;

  return (
    <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[15px]">
      {cards.map((card, cardIndex) => {
        const { icon, title, subtitle } = card;
        return (
          <div key={cardIndex}>
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${
                index === cardIndex &&
                "bg-slate-200 border  border-slate-300 shadow-2xl"
              } p-3 rounded-lg bg-slate-50 text-center shadow-md cursor-pointer transition-all`}
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

export default Cards;
