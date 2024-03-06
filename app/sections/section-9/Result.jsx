import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Result = () => {
  return (
    <section className='w-[1396px] h-[590px] bg-[#171717] rounded-[15px] m-auto mb-[104px]'>
       
      <div className='relative m-auto pt-[111px] w-[885px] text-center'><h2 className='uppercase text-[#ffffff] text-[61px] leading-[70px]'><span className='font-bold'>результат X2 для экспертов всех уровней</span>, которые уверены в своих продуктах</h2>
      <Image className='absolute content-[""]  top-[-10px] left-[415px]' src='/assets/img/arrow-orange.png' alt='' width={70.52} height={94.55}/>
      <div className='absolute top-[80px] left-[343px] bg-[#FE9604] w-[180px] h-[42px] rounded-[10px] pt-[5px] rotate-[-3.31deg]'><p className=' uppercase text-[#ffffff] text-[20px] font-bold'>Гарантируем</p></div>
      </div>
      <div className='flex gap-[8px] justify-center pb-[100px] mt-[39px]'> 
        <button type='button' className=' w-[261px] h-[60px] bg-[#5F42D4] rounded-[10px]  uppercase text-[#ffffff] text-[14px] font-bold leading-[1.2]'>заработать первый деньги <IoIosArrowForward  className="absolute w-[15px] h-[15px] ml-[236px] mt-[-16px] content-[''] "/></button>
        <button type='button' className=' w-[261px] h-[60px] bg-[transparent] border-[#5F42D4]  border-[1px] rounded-[10px] uppercase text-[#ffffff] text-[14px] font-bold leading-[1.2]'>Увеличить текущий результат</button>
      </div>
    </section>
  )
}

export default Result
