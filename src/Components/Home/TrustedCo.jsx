import { trustedCos } from "../../Assets/data/dataBank";

const TrustedCo = () => {
  return (
    <section className="mb-10 px-10">
      <div className="mb-6">
        <p className="text-center uppercase lg:text-base md:text-sm text-xs text-yellow-500 mb-2">
          Our Partners
        </p>
        <h2 className="text-center font-semibold lg:text-5xl md:text-4xl text-2xl text-slate-200">
          Trusted By Companies
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center items-center">
        {trustedCos?.map((c, index) => (
          <div
            key={index}
            className="bg-slate-900 w-full flex justify-center p-4 rounded-lg hover:scale-105 transition-all h-36 border border-slate-500 hover:shadow-yellow-500 shadow-md"
          >
            <img src={c?.logo} alt={c?.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCo;
