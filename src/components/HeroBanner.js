import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <>
      <div className="relative px-4 pt-8 lg:px-8 border-b border-teal-100">
        <div className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a0d8ef] to-[#dc9043] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-md leading-6 font-semibold text-gray-700 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            The Best Fitness Apps of 2024
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Fitness App </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">is the best fitness app because of its large workout library and easy-to-use tools.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/" className="z-10 rounded-md cursor-pointer bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 no-underline ">
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
