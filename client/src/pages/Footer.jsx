import { useState } from "react"
import MainFooter from "./MainFooter";

export default function () {
    const [open, setOpen] = useState(false);
    return (
        <>
            <footer>
                <div className=" fixed bottom-0 flex text-xs justify-between gap-4 px-8 md:text-sm py-3 shadow-inner  bg-white w-full">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-2">
                        <li className="list-disc col-span-2">&copy;{new Date().getFullYear()} spacee,Inc</li>
                        <li className="list-disc sm:ml-2">terms</li>
                        <li className="list-disc ">sitemap</li>
                        <li className="list-disc">privacy</li>
                        <li className="list-disc">destinations</li>
                        <li className="list-disc col-span-2">your privacy choices</li>
                     
                    </ul>
                    <div className="flex flex-col md:flex-row md:gap-2 items-center justify-end font-semibold">
                        <div className="flex gap-1 items-center  capitalize"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <h1  className="cursor-pointer">english(us)</h1>
                        </div>
                        <div  className="cursor-pointer">
                            <h1>$ USD</h1>
                        </div>
                        <div className="cursor-pointer" onClick={()=>setOpen(true)}>
                            support & resources
                        </div>
                    </div>
                </div>
                < MainFooter open={open} onclose={e =>setOpen(false)} />
            </footer>
        </>
    )
}