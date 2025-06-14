import React from "react";
import Setup from "/setup.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="maw-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="rounded-md w-[500px] mx-auto my-4"
          src={Setup}
          alt="/"
        />
        <div className="flex flex-col justify-center px-4">
          <p className="font-bold text-[#00df9a]">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            magnam dolorum, voluptatem labore eaque qui, voluptatibus aspernatur
            inventore ratione rerum sint laboriosam vero, quae aut asperiores
            possimus fugiat! Aliquid, aperiam!
          </p>
          <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
