import { useState } from "react"
export default function Cards({image,title,text}){
    return(
      <div className="flex flex-col shadow-lg gap-x-2 transition-all duration-1000 justify-between px-4 py-4 rounded-xl items-center hover:-mt-10">
        <img width={100} height={100} src={image} />
        <p className="font-semibold">{title}</p>
        <p>{text}</p>
      </div>
    )
}