import destinationImg from "../../Assets/images/BookSteps/destination.png";
import paymentImg from "../../Assets/images/BookSteps/payment.png";
import reachImg from "../../Assets/images/BookSteps/reach.png";
import boracayImg from "../../Assets/images/BookSteps/boracay.png";
import { MdOutlineApartment } from "react-icons/md";
import { FaLocationArrow, FaMapLocation, FaRegHeart } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";

const BookSteps = () => {
  const stepsData = [
    { id: 1, img: destinationImg, title: "Choose Destination" },
    { id: 2, img: paymentImg, title: "Make Payment" },
    { id: 3, img: reachImg, title: "Reach Airport on Selected Date" },
  ];

  return (
    <div className="mb-14 px-10 pt-4">
      <div className="flex flex-col  lg:flex-row gap-6 justify-center items-center">
        <div className="lg:basis-1/2 text-slate-300">
          <p className="lg:text-base md:text-sm text-xs text-yellow-500 mb-1">
            EASY & FAST
          </p>
          <h2 className="font-bold lg:text-5xl md:text-4xl text-2xl text-slate-200">
            Book your next trip <br />
            In 3 easy steps
          </h2>
          {stepsData?.map((step) => (
            <div className="flex mt-6 gap-4 items-center" key={step?.id}>
              <img src={step?.img} alt="" />
              <div>
                <h4 className="text-[20px] font-bold">{step?.title}</h4>
                <p className="text-[15px] leading-5 text-slate-400">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:basis-1/2">
          {/* card */}
          <div className="bg-slate-900 w-80 rounded-xl shadow-2xl border border-slate-300 p-5 text-slate-500">
            <img src={boracayImg} alt="Boracay" />
            <div className="my-3">
              <h3 className="lg:text-lg md:text-base text-sm font-bold text-slate-300">
                Trip To Boracay
              </h3>
              <div className="flex items-center lg:text-[14px] md:text-[12px] text-[10px] mt-1 font-semibold gap-3">
                <p>14-29 June</p>
                <div className="border h-4 w-[1px] border-slate-400"></div>
                <p>by Lei Britz</p>
              </div>
            </div>
            {/* logo part */}
            <div className="flex items-center gap-4">
              <div className="bg-slate-700 rounded-full border w-8 h-8 flex justify-center items-center">
                <ImLeaf className=" text-slate-100" />
              </div>
              <div className="bg-slate-700 rounded-full border w-8 h-8 flex justify-center items-center">
                <FaMapLocation className=" text-slate-100" />
              </div>
              <div className="bg-slate-700 rounded-full border w-8 h-8 flex justify-center items-center">
                <FaLocationArrow className=" text-slate-100" />
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 relative bottom-2">
              <div className="flex items-center">
                <MdOutlineApartment className="mr-[6px] text-slate-300 text-[19px]" />
                <p className="text-[16px]">24 people going</p>
              </div>

              {/* <!-- The button to open modal --> */}
              <label
                htmlFor="my-modal-3"
                className="modal-button cursor-pointer"
              >
                <FaRegHeart className=" text-indigo-600 text-xl" />
              </label>
              {/* modal box part */}
              <div className="modal bg-slate-800 shadow-lg rounded-lg p-2 absolute -right-[130px] bottom-6 hidden md:block lg:block border border-slate-600">
                <div className="modal-box">
                  <div className="flex gap-3">
                    <div className="">
                      <div className="w-12 rounded-full">
                        <img
                          src={boracayImg}
                          alt=""
                          className="w-12 h-12 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="pr-4 text-slate-400">
                      <p className="text-sm font-semibold">Ongoing</p>
                      <h3 className="text-[17px] font-bold text-slate-300">
                        Trip To Boracay
                      </h3>
                      <p className=" font-semibold text-[14px] mt-[2px]">
                        <span className="text-violet-500">40%</span> completed
                      </p>
                      <div className="w-full bg-slate-300 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-violet-500 h-1.5 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSteps;
