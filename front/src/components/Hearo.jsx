import { ShoppingCart } from "lucide-react";
import React from "react";
import heroImage from "../assets/bg.png";

const Hearo = () => {
  return (
    <section className="relative w-full min-h-screen bg-linear-to-r pt-25 pb-32 from-indigo-900 to-pink-900 text-white flex items-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            welcome
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            expedita tempore voluptas explicabo culpa, placeat quas voluptates,
            illum eligendi obcaecati architecto quis dolorem fugiat ea, nobis
            modi enim facere odio.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
            <button
              onClick={() => (window.location.href = "/shop")}
              className="flex items-center gap-3 bg-cyan-400 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              <ShoppingCart className="w-6 h-6" />
              shop now
            </button>
            <button
              onClick={() => (window.location.href = "/categories")}
              className="flex items-center gap-3 bg-cyan-400 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              <span>categories</span>
            </button>
          </div>
        </div>

        <div className="flex relative w-full max-w-lg">
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute top-6 left-6 bg-red-500 text-white px-5 py-3 rounded-full font-bold shadow-lg animate-pulse text-lg"></div>
        </div>
      </div>

      {/* FIXED WAVE: Removed rotate-180 and added block */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24 md:h-32"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.29C47.19,68.29,103.23,75.29,158.5,63.62c64-13.52,118.2-35.91,162.89-7.18Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hearo;