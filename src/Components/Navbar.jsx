import { motion } from 'framer-motion'


const links = ['Home','Projects','About']


export default function Navbar(){
return (
<motion.header
initial={{ y: -30, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="w-full py-4 glass fixed top-4 left-0 mx-auto  rounded-2xl backdrop-blur-sm z-20"
>
<div className="container mx-auto px-6 flex items-center justify-between">
<div className="text-xl font-bold tracking-tight">3D<span className="text-brand-2">Dev</span></div>
<nav>
<ul className="flex gap-6 text-sm opacity-90">
{links.map(l=> (
<li key={l} className="cursor-pointer hover:text-white">{l}</li>
))}
</ul>
</nav>
</div>
</motion.header>
)
}


