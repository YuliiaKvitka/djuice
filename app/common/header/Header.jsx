import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";


const Header = () => {
  return (
    <header className=" absolute content-[''] w-[1396px]  h-[50px] left-[22px] top-[20px]  ">
        <div className="flex justify-between items-center text-[white]">
            <div><Image src='/assets/img/logo.png' alt="" width={132} height={41.57}/></div>

            <div>
                <ul className="flex justify-between w-[388px]">
                    <li><a href=''>Кто мы</a></li>
                    <li><a href=''>Чем поможем</a></li>
                    <li><a href=''>Наши кейсы</a></li>
                    <li><a href=''>FAQ</a></li>
                </ul>
            </div>

            <div className="flex justify-between items-center w-[180px]">
                <Image src='/assets/img/lang.png' alt="" width={22} height={22}/>
                
            <button className="relative bg-[#5F42D4] w-[145px] h-[50px] rounded-[10px] uppercase font-bold text-[14px]" type="button">Связаться <IoIosArrowForward  className="absolute w-[15px] h-[15px] left-[120px] top-[18px] content-[''] "/></button>
                </div>
        </div>
      
    </header>
  )
}

export default Header
