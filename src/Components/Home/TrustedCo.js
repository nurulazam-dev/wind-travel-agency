import philippineLogo from "../../Assets/images/TrustedCo/philippine-airlines.png";
import cebuLogo from "../../Assets/images/TrustedCo/cebu-pacific.png";
import airLogo from "../../Assets/images/TrustedCo/air-asia.png";

const TrustedCo = () => {
  return (
    <section className="section my-5 py-4">
      <h1 className="text-3xl font-bold text-#14183E mx-12">
        Trusted By Companies
      </h1>
      <div className="flex w-full items-center justify-evenly">
        <div>
          <img src={philippineLogo} alt="" />
        </div>
        <div>
          <img src={cebuLogo} alt="" />
        </div>
        <div>
          <img src={airLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TrustedCo;
