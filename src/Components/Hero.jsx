import { motion } from "framer-motion";
import Card3D from "./Card3D";

const Hero = () => {
  return (
<section className="grid md:grid-cols-2 gap-10 items-center my-16">
<div>
<motion.h1
initial={{ x:-40, opacity:0 }}
animate={{ x:0, opacity:1 }}
transition={{ duration: 0.6 }}
className="text-4xl md:text-5xl font-extrabold leading-tight"
>
3D-Style Animated <span className="text-brand-1">Frontend</span> Projects
</motion.h1>
<motion.p
initial={{ x:-40, opacity:0 }}
animate={{ x:0, opacity:1 }}
transition={{ duration: 0.8 }}
className="mt-6 text-slate-300 max-w-xl"
>
Interactive 3D cards, tilt effects and fluid motion using React, Tailwind CSS and Framer Motion — perfect for portfolios and landing pages.
</motion.p>
<motion.button
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-1 to-brand-2 shadow-lg font-semibold"
>Explore Projects</motion.button>
</div>


<div className="flex justify-center md:justify-end">
<Card3D />
</div>
</section>
)
}



export default Hero;