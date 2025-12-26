import { useState, useContext } from "react";
import { categories, all_products } from "../assets/data";
import { ShoppingBag } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart } = useContext(ShopContext);

  const filteredProducts =
    selectedCategory === "All"
      ? all_products
      : all_products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full min-h-screen bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 py-24 px-6 sm:px-10 text-white">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12">
          تصفح الفئات
        </h2>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-3 font-semibold rounded-2xl hover:bg-white/30 transition-all text-lg ${
              selectedCategory === "All"
                ? "bg-linear-to-r from-cyan-400 to-blue-500 text-white"
                : "bg-white/10 hover:bg-white/20 scal-105"
            }`}
          >
            الكل
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 font-semibold rounded-2xl hover:bg-white/30 transition-all text-lg ${
                selectedCategory === category.name
                  ? "bg-linear-to-r from-cyan-400 to-blue-500 text-white"
                  : "bg-white/10 hover:bg-white/20 scal-105"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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
export default Categories;
