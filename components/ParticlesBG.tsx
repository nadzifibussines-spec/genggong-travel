"use client"

export default function ParticlesBG(){

const particles=[...Array(20)]

return(

<div className="absolute inset-0 overflow-hidden pointer-events-none">

{particles.map((_,i)=>(

<div
key={i}
className="absolute w-2 h-2 bg-white/40 rounded-full animate-pulse"
style={{
top:Math.random()*100+"%",
left:Math.random()*100+"%",
animationDelay:`${Math.random()*5}s`
}}
/>

))}

</div>

)

}