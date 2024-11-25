import Image from "next/image";
import React from "react";
import burger1 from "../../public/IMAGES/f1.jpg";
import burger2 from "../../public/IMAGES/f2.jpg";
import burger3 from "../../public/IMAGES/f3.jpg";
const Burger = () => {
  return (
    <div>
      <div className="py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold uppercase">burgers made with</h1>
          <h1 className="text-5xl font-bold uppercase">
            love and <span className="text-red-600">Care</span>
          </h1>
        </div>
        <div className="mx-auto container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-10 lg:px-0 px-10 items-center text-center py-20">
          <div className="1st hover:bg-white p-6 rounded-xl">
            <Image src={burger1} alt="burger" className="rounded-xl" />
            <h2 className="text-black text-2xl font-bold capitalize py-2">
              our burger
            </h2>
            <p className="text-md text-gray-500">
              A juicy beef patty topped with crispy lettuce, ripe tomato, melted
              cheddar cheese, and creamy mayo, all sandwiched between a soft,
              toasted bun
            </p>
          </div>
          <div className="2nd lg:translate-y-10  hover:bg-white p-6 rounded-xl">
            <Image src={burger2} alt="burger" className="rounded-xl" />
            <h2 className="text-black text-2xl font-bold capitalize py-2">
              Your Opinion is Important
            </h2>
            <p className="text-md text-gray-500">
              Your opinions matter because they provide valuable feedback on
              taste, quality, and overall satisfaction, helping us improve our
              customer loyalty.
            </p>
          </div>
          <div className="3rd  hover:bg-white p-6 rounded-xl">
            <Image src={burger3} alt="burger" className="rounded-xl" />
            <h2 className="text-black text-2xl font-bold capitalize py-2">
              Chicken Burgers
            </h2>
            <p className="text-md text-gray-500">
              A crispy chicken breast filet, topped with fresh lettuce, juicy
              tomato, creamy mayo, and melted cheese, all served on a soft,
              toasted bun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
