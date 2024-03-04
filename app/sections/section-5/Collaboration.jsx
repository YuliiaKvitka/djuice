import Image from 'next/image'
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import './styles.css'

const Collaboration = () => {
  return (
    <section   className='collaboration_section  mb-[81px] rounded-lg-[15px]  '>
      <div className='ml-[20px] mr-[20px] bg-[#ffffff] rounded-[15px] z-10'>

              <div className='relative top-[140px] bg-[url("/assets/img/graf.png")]  w-[1396px] h-[800px]' >
              <Image className='absolute content-[""] left-[60px] top-[20px] ' src='/assets/img/Vector-135.svg' alt='' width={50.54} height={51.37}/>

              <div className=''>
                <h3 className='  h-[120px] w-[362px] py-[40px] ml-[121px] text-[31px] font-normal uppercase leading-[40px]  '>Наше с тобой <span className='font-bold'>сотрудничество по этапам и срокам</span></h3> 
              </div>
              </div> 

        <div className='flex items-end gap-[49px] w-[1188px] h-[351px] mt-[181px] ml-[71px] py-[118px]'>
              <div className='relative'>
                  <h2 className='w-[789px] h-[210px] ml-[67.62px] mt-[141px] uppercase text-[61px] font-normal leading-[70px]'> из эксперта<span className='font-bold'> в успешного владельца онлайн-школы</span></h2>
                  <Image className='absolute content-[""] left-[0px] top-[20px] ' src='/assets/img/arrow-transform.png' alt='' width={64.58} height={85.05}/>
                  <div className='absolute top-[100px] left-[45px] content-[""] bg-[#FE9604] rotate-[-3.31deg] w-[232px] h-[42px] rounded-[10px]  text-center p-[10px]'><span className='uppercase text-[#ffffff] text-[20px] font-bold leading-[1.2] '>Трансформируйся</span></div>
              </div>
              <div>
                  <p className='text-[#171717] text-[20px] leading-[25px] w-[261px] h-[50px] mb-[23px]'>Выбирай самый короткий путь к цели вместе с нами</p>
                  <button type='button' className='relative w-[282px] h-[60px] bg-[#5F42D4] rounded-[10px] text-[#ffffff] text-[14px] font-bold leading-[1.2] uppercase text-center'>Заполнить анкету эксперта<IoIosArrowForward  className="absolute w-[15px] h-[15px] ml-[255px] mt-[-17px] content-[''] "/></button>
              </div>
        </div> 
      </div>
      
    </section>
  )
}

export default Collaboration
