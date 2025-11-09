import { useRef } from "react"
import { motion } from "framer-motion"

const Card3D = () => {
      const ref = useRef(null)

    function handleMove(e){
const el = ref.current
const rect = el.getBoundingClientRect()
const x = e.clientX - rect.left
const y = e.clientY - rect.top


const cx = rect.width/2
const cy = rect.height/2


const dx = (x - cx) / cx
const dy = (y - cy) / cy


const rotateX = (-dy * 10).toFixed(2)
const rotateY = (dx * 12).toFixed(2)


el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}
 
function handleLeave(){
const el = ref.current
el.style.transform = ''
}


return(

<motion.div
ref={ref}
onMouseMove={handleMove}
onMouseLeave={handleLeave}
initial={{ y: 40, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="w-80 h-96 rounded-2xl glass shadow-2xl overflow-hidden relative cursor-pointer"
>
{/* background gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-teal-500 opacity-90" />


{/* content */}
<div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
<div>
<div className="text-xs uppercase tracking-wider opacity-80">Featured</div>
<h3 className="text-2xl font-bold mt-3">Interactive 3D Card</h3>
<p className="mt-3 text-sm text-slate-100/90">Tilt the card with your mouse to see a 3D perspective effect. Smooth shadows and subtle scale complete the illusion.</p>
</div>


<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">JS</div>
<div>
<div className="text-sm font-semibold">Card Demo</div>
<div className="text-xs opacity-80">React + Tailwind</div>
</div>
</div>
<button className="px-4 py-2 rounded-md bg-white/10 border border-white/20">View</button>
</div>
</div>


{/* floating highlights */}
<div className="absolute -bottom-8 -right-10 w-40 h-40 blur-xl opacity-30 bg-white/10 rounded-full" />
</motion.div>
)
}


export default Card3D;










