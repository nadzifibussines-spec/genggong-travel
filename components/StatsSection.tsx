"use client"

import { useEffect, useState } from "react"

function Counter({number}:{number:number}){

const [count,setCount]=useState(0)

useEffect(()=>{

let start=0
const end=number

let duration=1500
let increment=end/(duration/16)

const timer=setInterval(()=>{

start+=increment

if(start>=end){
setCount(end)
clearInterval(timer)
}else{
setCount(Math.floor(start))
}

},16)

return()=>clearInterval(timer)

},[number])

return <span>{count}</span>

}

export default function StatsSection(){

return(

<section className="py-24 bg-white">

<div className="max-w-6xl mx-auto px-6">

<div className="grid md:grid-cols-3 gap-12 text-center">

<div>

<h3 className="text-5xl font-bold text-genggong-red">

<Counter number={50000}/>+

</h3>

<p className="text-gray-500 mt-2">

Jamaah Diberangkatkan

</p>

</div>

<div>

<h3 className="text-5xl font-bold text-genggong-red">

<Counter number={20}/>+

</h3>

<p className="text-gray-500 mt-2">

Tahun Pengalaman

</p>

</div>

<div>

<h3 className="text-5xl font-bold text-genggong-red">

<Counter number={100}/>%

</h3>

<p className="text-gray-500 mt-2">

Legal Kemenag

</p>

</div>

</div>

</div>

</section>

)

}