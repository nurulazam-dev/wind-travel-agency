import { service } from "../../Assets/data/dataBank";
import CategoryCards from "./CategoryCards";

const Category = () => {
  const { title, subtitle } = service;

  return (
    <section className="mb-10 px-10">
      <div className="mb-6">
        <p className="text-center lg:text-base md:text-sm text-xs text-yellow-500 mb-1">
          {subtitle}
        </p>
        <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-2xl text-slate-300">
          {title}
        </h2>
      </div>
      <CategoryCards />
    </section>
  );
};

export default Category;
