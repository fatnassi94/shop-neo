import { useState, useEffect, useContext } from "react";
import { all_products } from "../assets/data";
import { ShoppingBag } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Offer = () => {
  const { addToCart } = useContext(ShopContext);

  const [timeLeft, setTimeLeft] = useState({});
  const [products, setProducts] = useState(all_products.slice(0, 12)); // أول 12 منتج كمثال

  // عداد تنازلي لمعرض التخفيضات
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5); // عرض 5 أيام على سبيل المثال

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6 sm:px-10">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
          عروض اليوم
        </h2>
        <p className="mb-10 text-lg sm:text-xl font-semibold text-gray-300">  عروض اليوم</p>
        <div className="flex justify-center gap-4 mb-16 items-center">
          {
            ["days", "hours", "minutes", "seconds"].map((unit) => (
              <div key={unit} className="backdrop-md bg-white/10 rounded-lg p-6 w-20 sm:w-24 shadow-lg">
                <span className="block sm:text-4xl text-3xl text-cyan-400">
                  {timeLeft[unit] && 0 }
                </span>
                <span className="block mt-2 text-gray-200 capitalize">{unit}</span>

              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
         {products.map((product) => (
            <div
              key={product._id}
              className="bg-white/10 rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover mb-4 rounded-xl"
              />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg font-semibold mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product._id)}
                className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-2xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                أضف إلى السلة
              </button>
            </div>
          ))}
      </div>
      </div>
    </section>
  );
};

export default Offer;