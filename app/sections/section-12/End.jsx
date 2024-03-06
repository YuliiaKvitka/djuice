import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const End = () => {
  return (
    <section>
       <div className="flex w-[1273px] h-[570px] mt-[95px] ml-[145px] gap-[82px] mr-[22px]  ">
            <div> 
               <div className='w-[621px]'> <h2 className='text-[61px] leading-[70px]'>Лендинг закончился, <span className='font-bold'>пришло время принимать решение</span></h2></div>
    
               <p className='leading-[70px] text-[20px] font-medium mb-[13px]'>Заполняй анкету и становись лидером рынка</p>
               <button type='button' className='m-auto w-[282px] h-[60px] bg-[#5F42D4] rounded-[10px]  uppercase text-[#ffffff] text-[14px] font-bold leading-[1.2]'>Заполнить анкету эксперта <IoIosArrowForward  className="absolute w-[15px] h-[15px] ml-[255px] mt-[-16px] content-[''] "/></button>
            </div>
            <Image src='/assets/img/end.png' alt="" width={570} height={570}/>
       </div>
        
      
    </section>
  )
}

export default End
