"use client"

import { useEffect,useState } from "react"

export default function PageLoader(){

const [loading,setLoading]=useState(true)

useEffect(()=>{

setTimeout(()=>{

setLoading(false)

},1500)

},[])

if(!loading) return null

return(

<div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">

<div className="text-center">

<div className="w-12 h-12 border-4 border-genggong-red border-t-transparent rounded-full animate-spin mx-auto mb-4"/>

<p className="font-semibold text-gray-700">
Memuat Website...
</p>

</div>

</div>

)

}