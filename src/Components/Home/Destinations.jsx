import { sell } from "../../Assets/data/dataBank";
import DestinationsCards from "./DestinationsCards";

const Destinations = () => {
  const { title, subtitle, cards } = sell;

  return (
    <section className="mb-14 px-10">
      <div className="mb-6">
        <p className="text-center lg:text-base md:text-sm text-xs text-yellow-500 mb-1">
          {subtitle}
        </p>
        <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-2xl text-slate-200">
          {title}
        </h2>
      </div>
      <div className="flex flex-col  lg:flex-row gap-8 justify-center items-center">
        {cards?.map((card, index) => (
          <DestinationsCards card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
