import Image from "next/image";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";

const Reservation = () => {
  return (
    <>
      <div className="bg-[url('../../public/IMAGES/bg-black.jpg')] bg-cover bg-no-repeat bg-center w-full py-28">
        <div className="">
          <div className="flex justify-center lg:flex-row flex-col items-center gap-10 px-10">
            <div className="1st" data-aos="zoom-in-up" data-aos-duration="1000">
              <h1 className="lg:text-5xl text-4xl font-bold text-gray-200">
                DO YOU HAVE ANY DINNER
              </h1>
              <h1 className="lg:text-5xl text-4xl font-bold text-gray-200">
                PLAN TODAY? RESERVE YOUR
              </h1>
              <h1 className="lg:text-5xl text-4xl font-bold text-gray-200">
                TABLE
              </h1>
              <p className="text-lg py-4 text-gray-200">
                Reserve a dinner table with us and indulge in an unforgettable
                culinary experience. Enjoy mouth-watering burgers, exceptional
                service, and a cozy atmosphere that's perfect for any occasion.
                Book now and get ready to savor the flavor!
              </p>
              <div className="flex items-center gap-2 py-4">
                <div className="1st">
                  <p className="text-red-600 text-4xl">
                    <FaPhoneSquareAlt />
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-3xl text-gray-200">
                    Quick order 24/7
                  </h2>
                  <h2 className="font-bold text-3xl text-yellow-800">
                    +0123 456 789
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="2nd bg-[#218b50] flex flex-col justify-center items-center text-center lg:w-1/2 w-full rounded-2xl p-10"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold uppercase py-2 text-gray-200">
                  <RiContactsLine />
                </h2>
                <h2 className="text-4xl font-bold uppercase py-4 text-gray-200">
                  Reservation
                </h2>
                <h2 className="text-2xl font-bold uppercase py-4 text-gray-200">
                  Book your table!
                </h2>
              </div>
              <div className="flex gap-6">
                <div className="1st">
                  <select
                    name="person"
                    id=""
                    className="rounded-xl px-6 outline-none border-2 border-slate-900"
                  >
                    <option value="1 person">1 person</option>
                    <option value="2 persons">2 persons</option>
                    <option value="3 persons">3 persons</option>
                    <option value="4 persons">4 persons</option>
                  </select>
                </div>
                <div className="2nd">
                  <input
                    type="date"
                    className="rounded-xl px-6 outline-none border-2 border-slate-900"
                  />
                </div>
              </div>
              <div>
                <input
                  type="time"
                  className="px-6 outline-none my-4 border-2 border-slate-900 w-full"
                />
              </div>
              <div>
                <button className="bg-slate-900 text-white capitalize py-4 cursor-pointer outline-none border-none w-full px-20 my-4 rounded-xl hover:bg-red-600">
                  book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
