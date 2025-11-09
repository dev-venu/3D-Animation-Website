import React, { useRef } from 'react'
import { motion } from 'framer-motion'


export default function ProjectCard({ project }){
const ref = useRef(null)


function onMove(e){
const el = ref.current
const rect = el.getBoundingClientRect()
const x = e.clientX - rect.left
const y = e.clientY - rect.top
const cx = rect.width/2
const cy = rect.height/2
const dx = (x - cx)/cx
const dy = (y - cy)/cy
const rX = (-dy * 6).toFixed(2)
const rY = (dx * 6).toFixed(2)
el.style.transform = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale(1.02)`
}
function onLeave(){ ref.current.style.transform = '' }


return (
<motion.div
ref={ref}
onMouseMove={onMove}
onMouseLeave={onLeave}
initial={{ y: 20, opacity: 0 }}
whileInView={{ y:0, opacity:1 }}
transition={{ duration: 0.5 }}
className="glass rounded-2xl p-5 shadow-xl min-h-[200px]"
>
<div className="flex items-center justify-between">
<div>
<div className="text-sm opacity-80">{project.tags.join(' • ')}</div>
<div className="text-lg font-semibold mt-2">{project.title}</div>
</div>
<div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center">PX</div>
</div>
<p className="mt-4 text-sm text-slate-200/80">{project.desc}</p>


<div className="mt-6 flex items-center gap-3">
<button className="px-4 py-2 rounded-lg bg-white/10">Demo</button>
<button className="px-4 py-2 rounded-lg border border-white/10">Code</button>
</div>
</motion.div>
)
}