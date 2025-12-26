import React, { useState, useEffect } from "react";
import { Rocket, Menu, X, Sidebar } from "lucide-react";
import MenuItems from "./MenuItems";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="hidden h-12 md:flex items-center px-10 py-4 w-full fixed top-0 left-0 bg-linear-to-r from-indigo-800 via-purple-800 to-pink-800 backdrop-blur shadow-xl z-100">
        <div className="items-center gap-4 lg:flex hidden">
          <Rocket className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h1 className="text-white font-bold text-xl tracking-widest">
            NeoShop
          </h1>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <MenuItems isMobile={false} setSideBarOpen={setIsOpen} />
        </div>
      </header>
      <header className="md:hidden h-12 justify-between items-center px-4 py-4 w-full fixed top-0 left-0 bg-linear-to-r from-indigo-800 via-purple-800 to-pink-800 backdrop-blur shadow-xl z-100 flex">
        <div className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h1 className="text-white font-bold text-xl tracking-widest">
            NeoShop
          </h1>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white p-2 rounded-lg shadow-2xl hover:scale-150 transition-transform"
        >
          <Menu className="w-8 h-8 cursor-pointer" />
        </button>
      </header>
      {/* side bae */}
      <aside
        className={`fixed top-12 right-0 h-full w-72 bg-linear-to-b from-indigo-900 via-purple-900 to-pink-900 shadow-2xl backdrop-blur-md transition-transform duration-500 z-40
         ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white p-3 hover:white/20  transition-all"
          >
            <X className="w-8 h-8 cursor-pointer" />
          </button>
        </div>
        <div className="mt-10 px-6 space-y-6">
            <MenuItems isMobile={true} setIsOpen={setIsOpen} />
        </div>
      </aside>
      {
        isOpen &&(
            <div className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(true)}
            >

            </div>
        )
      }
    </>
  );
}
