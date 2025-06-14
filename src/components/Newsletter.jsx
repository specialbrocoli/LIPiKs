import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="bg-white p-3 flex w-full rounded-md text-black"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] ml-4 px-6 py-3 rounded-md text-black mt-4 sm:mt-0">
              Notify Me
            </button>
          </div>
          <p className="mt-3">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] underline underline-offset-3">
              Privacy policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
