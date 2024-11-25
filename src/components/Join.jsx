import React from "react";

const Join = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-20 py-10">
        <h2 className="text-slate-900 lg:text-5xl text-3xl font-bold uppercase">
          join for hot offers
        </h2>
        <p className="text-slate-900 lg:text-lg text-md my-2">
          Join us for hot offers and get ready to ignite your taste buds. Enjoy
          exclusive deals, discounts, and surprises on our mouth-watering
          burgers. Don't miss out! Subscribe now and start saving!
        </p>
        <div className="flex gap-2 my-2">
          <input
            type="email"
            placeholder="Email Address"
            className="lg:w-96 w-52 border-none outline-none bg-slate-500 py-4 pl-2 rounded-lg caret-white"
          />
          <button className="bg-[#074623] hover:bg-[#0a8150] text-white border-none outline-none px-6 py-4 rounded-lg cursor-pointer font-bold">
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
