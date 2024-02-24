import { useEffect } from "react"
import { cards,blogCards } from "../lib/const"
import BlogCard from "./blogCard"
import Cards from "./Cards"
export default function Home() {
    useEffect(()=>{
        console.log(cards,blogCards)
    },[])
    return (
        <div>
        <div className=" flex ">
            <div className="flex  flex-col md:flex-row  mt-7 md:ml-20">
                <div className="w-fit p-4" >
                    <p className="flex text-2xl fap-x- gap-y-120 items-center font-serif  mt-16 text-gray-700">Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
                    </p>
                    <p className="flex text-2xl fap-x- gap-y-120 items-center font-serif mt-16 text-gray-700">Transforming Enterprises
                        with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
                    <p className="flex text-2xl fap-x- gap-y-120 items-center font-serif mt-16 text-gray-700">AI-Powered Question Generation for Accurate Candidate Assessment</p>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" href="https://www.bluetickconsultants.com/generative-ai.html" target="_blank">Explore Now
                    </a>
                </div>
                <div className="w p-4">
                    <img className="w-full h-auto border" src="images/video.webp" autoPlay loop alt="InterviewGPT Logo" />
                </div>
            </div>
            <div>
            </div>
        </div>
        <div className="flex mt-20 mx-10 text-center flex-col md:flex-row justify-around gap-x-10">
            {cards.map((item,index)=>
                <Cards key={index} text={item.text} title={item.title} image={item.image} />
            )}
        </div>
        <div className="flex justify-around gap-x-10 flex-col md:flex-row gap-y-40 mx-10 mt-40 ">
            {blogCards.map((item,index)=>
            <BlogCard key={index} title={item.title} text={item.text} link={item.link}/>
            )}
        </div>
        </div>
    )
}