import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`شكراً لتواصلك معنا، ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
     <section className='relative w-full bg-linear-to-r from-indigo-800 via-purple-900 to-pink-900 text-white py-30 min-h-screen'>
      <div className="absolute inset bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <h2 className='text-4xl sm:text-5xl font-extrabold mb-12'>
         footer
        </h2>

      </div>
    </section>
  );
};

export default Footer;