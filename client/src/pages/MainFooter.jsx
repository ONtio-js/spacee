
export default function MainFooter({ open, onclose }) {


  return (
    <>
      <div className={`fixed  inset-0 flex  transition-all  delay-200 ${open ? "visible bg-black/70" : "invisible"}`} onClick={onclose}>
        <div onClick={e => e.stopPropagation()} className=" bg-white shadow-md absolute bottom-0 w-full rounded-t-3xl px-10 transition-all delay-200">
          <div>
            <h1 className="cursor-pointer w-4 h-8 p-5 text-2xl text-gray-700" onClick={onclose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</h1>
          <div className="text-gray-700 md:flex md:justify-between">
            <div className=" border-b-2 border-gray-300 py-8 ">
                <h1 className="capitalize font-semibold py-2">support</h1>
                <ul className="grid grid-cols-3 gap-y-2 md:flex flex-col">
                    <li><a  className = "capitalize" href="#">Help center</a></li>
                    <li><a  className = "capitalize" href="#">cancellation options</a></li>
                    <li><a  className = "capitalize" href="#">AirCover</a></li>
                    <li><a  className = "capitalize" href="#">our COVID_19 response</a></li>
                    <li><a  className = "capitalize" href="#">Supporting people with disabilities</a></li>
                    <li><a  className = "capitalize" href="#">Report a neighborhood concern</a></li>
                </ul>
            </div>
            <div className=" border-b-2 border-gray-300 py-8">
                <h1 className="capitalize font-semibold py-2">community</h1>
                <ul className="grid grid-cols-3 gap-y-2 md:flex flex-col">
                    <li><a  className = "capitalize" href="#">spacee.org:<br/> disaster relief housing</a></li>
                    <li><a  className = "capitalize" href="#">Combating discrimination</a></li>

                </ul>
            </div>
            <div className=" border-b-2 border-gray-300 py-6 ">
                <h1 className="capitalize font-semibold py-2">hosting</h1>
                <ul className="grid grid-cols-3 gap-y-2 md:flex flex-col">
                    <li><a  className = "capitalize" href="#">Spacee your home</a></li>
                    <li><a  className = "capitalize" href="#">Visit our community forum</a></li>
                    <li><a  className = "capitalize" href="#">AirCover for Hostsr</a></li>
                    <li><a  className = "capitalize" href="#">How to host responsibly</a></li>
                    <li><a  className = "capitalize" href="#">Explore hosting resources</a></li>
                    <li><a  className = "capitalize" href="#">spacee-friendly apartments</a></li>
                </ul>
            </div>
            <div className="  pb-20 md:pt-6">
                <h1 className="capitalize font-semibold py-2">spacee</h1>
                <ul className="grid grid-cols-3 gap-y-2 md:flex flex-col">
                    <li><a  className = "capitalize" href="#">Newsroom</a></li>
                    <li><a  className = "capitalize" href="#">Careers</a></li>
                    <li><a  className = "capitalize" href="#">Learn about new features</a></li>
                    <li><a  className = "capitalize" href="#">Investors</a></li>
                    <li><a  className = "capitalize" href="#">Letter from our founders</a></li>
                    <li><a  className = "capitalize" href="#">Gift cards</a></li>
                </ul>
            </div>
          </div>
          </div>
         
        </div>

      </div>
    </>
  )
}