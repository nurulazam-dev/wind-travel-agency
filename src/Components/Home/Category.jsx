import { service } from "../../Assets/data/dataBank";
import Cards from "./Cards";

const Category = () => {
  const { title, subtitle } = service;

  return (
    <section className="section my-5 px-12">
      <div className="container mx-auto">
        <div className="mb-6">
          <p className="text-center lg:text-base md:text-sm text-xs text-yellow-500 mb-1">
            {subtitle}
          </p>
          <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-2xl text-slate-300">
            {title}
          </h2>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Category;
