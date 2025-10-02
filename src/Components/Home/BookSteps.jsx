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
    <div className="section my-5 px-12">
      <div className="container mx-auto">
        <div className="flex flex-col  lg:flex-row mx-5 justify-center items-center">
          <div className="lg:basis-1/2 text-slate-600">
            <p className="text-[18px] font-semibold">Easy and Fast</p>
            <div className="text-[50px] font-bold leading-[60px] text-slate-800">
              <h3>Book your next trip</h3>
              <h3>In 3 easy steps</h3>
            </div>
            {stepsData?.map((step) => (
              <div className="flex my-3 pt-3 items-center" key={step?.id}>
                <div>
                  <img src={step?.img} alt="" />
                </div>
                <div className="mx-3 px-3">
                  <h4 className="font-bold">{step?.title}</h4>
                  <p className="text-[15px] leading-5">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:basis-1/2 p-5">
            <div className="">
              {/* card */}
              <div className="bg-slate-50 w-80 rounded-2xl shadow-2xl border border-slate-200 p-5 text-slate-500">
                <img src={boracayImg} alt="Boracay" />
                <div className="my-3">
                  <h3 className="text-[18px] font-bold text-slate-600">
                    Trip To Boracay
                  </h3>
                  <div className="flex items-center text-[14px] mt-1 font-semibold gap-3">
                    <p>14-29 June</p>
                    <div className="border h-5 w-[1px] border-slate-400"></div>
                    <p>by Lei Britz</p>
                  </div>
                </div>
                {/* logo part */}
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 rounded-full border w-8 h-8 flex justify-center items-center">
                    <ImLeaf className=" text-slate-500" />
                  </div>
                  <div className="bg-slate-100 rounded-full border w-8 h-8 flex justify-center items-center">
                    <FaMapLocation className=" text-slate-500" />
                  </div>
                  <div className="bg-slate-100 rounded-full border w-8 h-8 flex justify-center items-center">
                    <FaLocationArrow className=" text-slate-500" />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5 relative bottom-2">
                  <div className="flex items-center">
                    <MdOutlineApartment className="mr-[6px] text-slate-400 text-[19px]" />
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
                  <div className="modal bg-slate-50 shadow-lg rounded-lg p-2 absolute -right-[150px] bottom-6">
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
                        <div className="pr-4">
                          <p className="text-sm text-slate-500 font-semibold">
                            Ongoing
                          </p>
                          <h3 className="text-[18px] font-bold text-slate-600">
                            Trip To Boracay
                          </h3>
                          <p className=" font-semibold text-[14px] mt-[2px]">
                            <span className="text-violet-500">40%</span>{" "}
                            completed
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
      </div>
    </div>
  );
};

export default BookSteps;
