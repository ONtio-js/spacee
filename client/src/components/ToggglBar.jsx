import React,{useState} from 'react'

const ToggglBar = ({switchAddons}) => {
    const [price,TogglePrice] = useState(false);
    const handleClick = () => {
        switchAddons();
        TogglePrice(prev => !prev);
    }
  return (
    <div className="flex justify-around items-center border max-w-lg border-gray-400 w-5/6 md:w-2/3 px-2 md:px-5 mx-auto gap-4 rounded-xl py-1 md:py-4">
          <h1 className="text-xs md:text-lg font-semibold capitalize border-r-2 pr-4">display total price</h1>
          <h1 className="text-gray-700 text-xs">Includes all fees, before taxes</h1>
          <div onClick={handleClick} className="w-8 md:w-16 py-[1px] px-[1px] h-4 md:h-7 flex items-center rounded-3xl   border-[1px] border-gray-400 relative ">
            <div className={`bg-primary w-4  h-4 md:w-6 md:h-6 rounded-full absolute  ${price?'translate-x-[150%]':'translate-x-0'} transition-all duration-700 ease-in-out `}></div>
            </div>
        </div>
  )
}

export default ToggglBar