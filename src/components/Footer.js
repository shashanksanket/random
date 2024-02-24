import { useState } from "react";

export default function Footer() {
    const [tab, setTab] = useState(0);

    return (
        <div className="bg-gray-300 text-black mt-12 px-10">
            <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 gap-x-4 md:gap-x-0">
                <div className="flex flex-col items-center md:items-start">
                    <img src='/images/logo.png' className="w-48 mb-4" alt="Logo" />
                    <p className="font-bold text-xl">Bluetick Consultants LLP</p>
                    <p className="mt-2">contact@bluetickconsultants.com</p>
                    <div className="flex mt-4 space-x-2">
                        <a href="https://www.glassdoor.co.in/Overview/Working-at-Bluetick-Consultants-EI_IE3180317.11,31.htm" target="_blank" rel="noopener noreferrer">
                            <img src="/images/glassdoor.webp" className="w-20" alt="Glassdoor Logo" />
                        </a>
                        <img src="/images/bluetick.webp" className="w-10" alt="Bluetick Logo" />
                    </div>
                </div>
                <div className="md:mt-0">
                    <h3 className="text-lg font-bold">Resources</h3>
                    <p className="mt-4">Blogs</p>
                </div>
                <div className="md:text-right">
                    <h3 className="text-lg font-bold">Products</h3>
                    <div className="mt-4 space-y-2 md:space-y-0 md:space-x-8 md:flex md:flex-col">
                        <a className="hover:text-blue-800" href="">Talk to Code</a>
                        <a className="hover:text-blue-800" href="">InterviewGPT</a>
                        <a className={`hover:text-blue-800 ${tab === 1 && 'text-blue-800'}`} onClick={() => setTab(1)} href="">PrivacyDoc</a>
                        <a className={`hover:text-blue-800 ${tab === 2 && 'text-blue-800'}`} onClick={() => setTab(2)} href="">Sales Call Evaluator</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
