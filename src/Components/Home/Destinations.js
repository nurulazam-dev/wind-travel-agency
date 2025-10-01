import { sell } from "../../Assets/data/dataBank";
import DestinationsCards from "./DestinationsCards";

const Destinations = () => {
  const { title, subtitle } = sell;

  return (
    <section className="section mt-10">
      <div className="container mx-auto">
        <div className="mb-10">
          <p className="text-center text-[18px]">{subtitle}</p>
          <h2 className="text-center font-semibold text-[50px]">{title}</h2>
        </div>
        <DestinationsCards />
      </div>
    </section>
  );
};

export default Destinations;
