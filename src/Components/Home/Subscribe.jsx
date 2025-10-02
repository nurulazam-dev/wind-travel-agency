import { FaEnvelope } from "react-icons/fa6";
import subsImg from "../../Assets/images/Icons/subscribe.png";

const Subscribe = () => {
  return (
    <div>
      <div
        style={{ background: `url(${subsImg})`, backgroundSize: "cover" }}
        className="mx-20 py-12"
      >
        <h2 className="text-[33px] font-bold text-center text-slate-600">
          Subscribe to get information, latest news and other
          <br /> interesting offers about WindTravel
        </h2>

        <div className="flex mt-10 justify-center">
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
      </div>
    </div>
  );
};

export default Subscribe;
