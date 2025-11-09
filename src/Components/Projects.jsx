import React from 'react'
import ProjectCard from './ProjectCard'


const projects = [
{ id:1, title: '3D Product Card', tags: ['React','Tailwind'], desc: 'Click & tilt style product demo.' },
{ id:2, title: 'Flip Gallery', tags: ['Animation','CSS'], desc: 'Card flip and layered depth.' },
{ id:3, title: 'Interactive Dashboard', tags: ['UX','Motion'], desc: 'Micro-interactions and motion.' }
]


export default function Projects(){
return (
<section className="mt-16">
<h2 className="text-2xl font-bold">Projects</h2>
<p className="mt-2 text-slate-300">Some 3D-style and motion-rich experiments.</p>


<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
{projects.map(p=> <ProjectCard key={p.id} project={p} />)}
</div>
</section>
)
}