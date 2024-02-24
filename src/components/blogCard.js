import { useState } from "react"
export default function BlogCard({title,text,link}){
    return(
      <div className="flex flex-col !text-left w-fit shadow-lg justify-between px-4 py-4 rounded-xl items-center">
        <p className="font-bold">{title}</p>
        <p>{text}</p>
        <p className="text-blue-700">
          <a href={link}>
          Read More {'->'}
          </a>
          </p>
      </div>
    )
}