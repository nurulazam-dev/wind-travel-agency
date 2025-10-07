import { FaEnvelope } from "react-icons/fa6";
import subsImg from "../../Assets/images/Icons/subscribe.png";
import { BsFillSendFill } from "react-icons/bs";

const Subscribe = () => {
  return (
    <section
      style={{ background: `url(${subsImg})`, backgroundSize: "cover" }}
      className="mx-20 py-12 relative my-5"
    >
      <div className="border rounded-full bg-yellow-600 text-white p-2 h-14 w-14 flex justify-center items-center absolute -right-[20px] top-[4%] translate-y-[-50%]">
        <BsFillSendFill className="w-8 h-7" />
      </div>
      <h2 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl text-slate-300 max-w-4xl mx-auto">
        Subscribe to get information, latest news and other interesting offers
        about WindTravel
      </h2>

      <div className="flex mt-8 justify-center">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground transition-colors group-focus-within:text-foreground">
            <FaEnvelope className="text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Your email"
            className="input input-md w-full shadow-xl rounded-md pl-10 pr-7 py-3"
          />
        </div>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md ml-4 shadow-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
