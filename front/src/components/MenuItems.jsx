import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  FolderOpen,
  ShoppingCart,
  Mail,
  User,
  ShoppingBag,
  Home
} from "lucide-react";
import { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ShopContext } from "../context/ShopContext";
export const menuItemsData = [
  { to: "home", label: "Home", Icon: Home },
  { to: "categories", label: "Categories", Icon: FolderOpen },
  { to: "shop", label: "Shop", Icon: ShoppingBag },
  { to: "contact", label: "Contact", Icon: Mail },
];
const MenuItems = ({isMobile, setSideBarOpen}) => {
  const { token, setToken, cartItems } = useContext(ShopContext);
  const totalItems = Object.values(cartItems).length// Replace with actual cart item count logic

  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
    Navigate("/");
    setSideBarOpen && setSideBarOpen(false);
  };
  const navigate = useNavigate();
  return <div  className={`flex md:justify-center lg:justify-end ${
    isMobile
      ? "flex-col space-y-6 items-center px-4 gap-y-2"
      : "flex-row w-full items-center gap-4"
  }`}>
      {menuItemsData.map(({ to, label, Icon }) => 
      window.location.pathname === "/" ? (
        <ScrollLink
          key={to} to={to} smooth={true} duration={500}
           offset={-80}  spy={true} 
           onClick={() => setSideBarOpen(false)}
           className="flex items-center gap-3 px-4 py-3 rounded-lg h-[35px] transition-all shrink-0 w-auto text-gray-200 hover:bg-white/10 hover:text-white cursor-pointer"
           activeClass="bg-linear-to-r from-indigo-500 to-pink-500 text-white">
          <Icon className="w-6 h-6" />
          <span className="font-semibold text-base">{label}</span>
           </ScrollLink>
      ) : (
        <button
          key={to}
          onClick={() => {
            navigate("/");
            setSideBarOpen(false);
          }
          }
          className="flex items-center gap-3 px-4 py-3 rounded-lg h-[35p] transition-all shrink-0 w-auto text-gray-200 hover:bg-white/10 hover:text-white cursor-pointer">
         <Icon className="w-6 h-6" />
         <span className="font-semibold text-base">{label}</span>
          </button>
      ))}
      <button onClick={() => {
            navigate("/cart");
            setSideBarOpen(false);
          }}
          className="relative flex items-center gap-3 px-4 py-3 rounded-lg h-[35px] transition-all shrink-0 w-auto text-gray-200 hover:bg-white/10 hover:shadow-md"
          >
            <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span> 
              )}
            
          </button>
        {
          !token ? (
            <button
              onClick={() => {
                navigate("/login");
                setSideBarOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-lg h-[35px] transition-all shrink-0 w-auto text-gray-200 hover:bg-white/10 hover:text-white cursor-pointer bg-linear-to-r from-indigo-950 via-purple-950 to-red-950">
                login
              </button>
            ) : (<div className="flex items-center gap-4">
              <User className="w-6 h-6 text-gray-200" />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-3 rounded-lg h-[35px] transition-all shrink-0 w-auto text-gray-200 hover:bg-white/10 hover:text-white cursor-pointer bg-red-500">
                  logout
              </button>
            </div>)
        }
  </div>;
};

export default MenuItems;
