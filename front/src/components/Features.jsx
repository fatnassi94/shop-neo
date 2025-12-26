import React from 'react'
import { Truck, ShieldCheck, RefreshCcw, Headphones   } from 'lucide-react'

const featuresData = [
  {
    Icon: Truck,
    title: "شحن مجاني",
    desc: "على الطلبات فوق $100",
    color: "from-cyan-400 to-blue-500",
  },
  {
    Icon: ShieldCheck,
    title: "ضمان المنتجات",
    desc: "استبدال أو استرجاع مجاني خلال 14 يوم",
    color: "from-green-400 to-emerald-500",
  },
  {
    Icon: RefreshCcw,
    title: "إرجاع سهل",
    desc: "إجراءات بسيطة وسريعة خلال دقائق",
    color: "from-purple-500 to-pink-500",
  },
  {
    Icon: Headphones,
    title: "دعم 24/7",
    desc: "فريقنا جاهز لمساعدتك في أي وقت",
    color: "from-yellow-400 to-orange-500",
  },
];


const Features = () => {
  return (
    <section className='relative w-full bg-linear-to-r from-indigo-800 via-purple-900 to-pink-900 text-white py-30'>
      <div className="absolute inset bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <h2 className='text-4xl sm:text-5xl font-extrabold mb-12'>
          لماذا تختار نيوشوب؟
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map(({ Icon, title, desc, color }, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-150 hover:shadow-cyan-600/30">
              <div className={`rounded-2xl mb-4 bg-gradient-to-r ${color}  w-20 h-20 flex items-center justify-center shadow-lg mb-6`}> 
                <Icon className="w-10 h-10 text-white" />
               
              </div>
               <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-200">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    

  )
}

export default Features
