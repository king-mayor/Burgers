import Image from "next/image";
import React from "react";
import delivery from "../../public/IMAGES/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { LuDoorOpen } from "react-icons/lu";
import { IoFastFood } from "react-icons/io5";
const Shipping = () => {
  return (
    <div>
      <div className="flex lg:justify-center justify-start lg:flex-row items-center flex-col gap-10 py-28 lg:px-0 px-10">
        <div
          className="1st lg:w-2/3 w-full"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <Image src={delivery} alt="delivery" />
        </div>
        <div className="2nd" data-aos="slide-left" data-aos-duration="1000">
          <h2 className="md:text-6xl text-4xl uppercase font-bold">
            your <span className="text-red-600">favorite burger</span>
          </h2>
          <h2 className="md:text-6xl text-4xl uppercase font-bold">
            on the way
          </h2>
          <p className="text-gray-600 text-lg py-4">
            The unbeatable combination of tender, juicy patties, crispy bacon,
            melted cheese, and fresh toppings, all pressed between a soft,
            toasted bun that's made to perfection, making every bite a delight.
          </p>
          <div className="flex items-center gap-2">
            <p>
              <RiEBike2Fill className="text-red-600 font-bold text-3xl" />
            </p>
            <p className="text-lg font-semibold">Delivery in 30 minutes</p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <IoFastFood className="text-red-600 font-bold text-3xl" />
            </p>
            <p className="text-lg font-semibold">Free shipping from 75$</p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <LuDoorOpen className="text-red-600 font-bold text-3xl" />
            </p>
            <p className="text-lg font-semibold">Delivery on your Doorstep</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
