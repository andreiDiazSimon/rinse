import { NavLink } from "react-router";
export default function LandingPageNav() {
  return (
    <>
      <div className="w-full sticky top-0 z-50 flex justify-start items-center bg-[#FDFBEE] p-[1rem] shadow-2xl ">
        <div className="flex justify-center items-center gap-[0.5rem] mr-auto">
          <img src="/picture.png" className="w-[2.5rem] h-[2.5rem] invert" />
          <div className="text-[2rem] text-[black] font-[Poppins] font-bold ">RINSE</div>
        </div>
        <div className="flex gap-[2rem] text-[1rem] text-[#3E3F58] font-bold font-[Poppins]">
        <div className="hover:text-white hover:bg-[#24444d] px-4 py-2 rounded-lg transition-all duration-500 cursor-pointer">Promos</div>
        <div className="hover:text-white hover:bg-[#24444d] px-4 py-2 rounded-lg transition-all duration-500 cursor-pointer">Prices</div>
        <div className="hover:text-white hover:bg-[#24444d] px-4 py-2 rounded-lg transition-all duration-500 cursor-pointer">Branches</div>
       <div className="hover:text-white hover:bg-[#24444d] px-4 py-2 rounded-lg transition-all duration-500 cursor-pointer">Contact us</div>
      </div>
        <NavLink className="ml-auto" to="/sign/up" end>
          <div className="px-[3rem] py-[0.7rem] text-[#ffffff] bg-[#24444d] rounded-lg transition-all duration-300 hover:scale-105  hover:bg-[white] active:scale-95 hover:text-[black] bg-lightblue-500 shadow-lg shadow-blue-500/50 cursor-progress">
            Sign up & reserve your spot
          </div>
        </NavLink>
      </div>
    </>
  );
}
