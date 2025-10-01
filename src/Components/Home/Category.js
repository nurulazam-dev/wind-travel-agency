import { service } from "../../Assets/data/dataBank";
import Cards from "./Cards";

const Category = () => {
  const { title, subtitle } = service;

  return (
    <section className="section my-5 py-4">
      <div className="container mx-auto">
        <div className="mb-10">
          <p className="text-center text-[18px]">{subtitle}</p>
          <h2 className="text-center font-semibold text-[50px]">{title}</h2>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Category;
