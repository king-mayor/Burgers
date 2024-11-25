import Image from "next/image";
import React from "react";
import t1 from "../../public/IMAGES/t1.jpg";
import t2 from "../../public/IMAGES/t2.jpg";
import t3 from "../../public/IMAGES/t3.jpg";
const Chefs = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="text-5xl font-bold uppercase text-slate-900 text-center">
            MEET Our expert <span className="text-red-600">Chefs</span>
          </h2>
        </div>
        <div className="mx-auto container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center items-center text-center py-14 gap-6">
          <div className="1st flex flex-col justify-center items-center">
            <Image src={t1} alt="chef" className="rounded-2xl" />
            <h2 className="text-slate-900 text-3xl font-bold py-2">John Doe</h2>
            <button className="bg-[#218b50] hover:bg-[#186139] text-white py-2 px-6 cursor-pointer font-bold text-xl my-4">
              kitchen potter
            </button>
            <p className="text-slate-900 text-center px-10">
              Collaborate with the culinary team to develop new menu items,
              attend to customer needs and as well take part in kitchen duties.
            </p>
          </div>
          <div className="1st flex flex-col justify-center items-center">
            <Image src={t2} alt="chef" className="rounded-2xl" />
            <h2 className="text-slate-900 text-3xl font-bold py-2">
              Mary Woods
            </h2>
            <button className="bg-[#218b50] hover:bg-[#186139] text-white py-2 px-6 cursor-pointer font-bold text-xl my-4">
              Executive Chef
            </button>
            <p className="text-slate-900 text-center px-10">
              Plan and manage kitchen operations, including inventory and
              supply. Maintain high levels of cleanliness, hygiene and safety in
              the kitchen.
            </p>
          </div>
          <div className="1st flex flex-col justify-center items-center">
            <Image src={t3} alt="chef" className="rounded-2xl" />
            <h2 className="text-slate-900 text-3xl font-bold py-2">
              David Baker
            </h2>
            <button className="bg-[#218b50] hover:bg-[#186139] text-white py-2 px-6 cursor-pointer font-bold text-xl my-4">
              Head Chef
            </button>
            <p className="text-slate-900 text-center px-10">
              Lead and train kitchen staff to ensure seamless service. Prepare
              and cook a variety of menu items to exceptional standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
