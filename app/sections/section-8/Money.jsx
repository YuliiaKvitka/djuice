import Image from 'next/image'
import React from 'react';
import './styles.css'

const Money = () => {
  return (
    <section className=' bg-[#E9E8E8] pb-[100px]'>
      <div className='flex mt-[95px] ml-[44px] w-[1400px] justify-between'>
          <div className='relative'>
            <div className='absolute content-[""] left-[25px] top-[85px] bg-[#5F42D4] w-[97px] h-[38px] pt-[5px] rounded-[5px] rotate-[-8.66deg] '><span className='uppercase  text-[#ffffff] text-[20px] font-bold px-[15px] '>в 2023</span></div>
            <h2 className=' ml-[42px] mt-[111px] w-[595px] text-[61px] leading-[70px] font-normal text-balance'><span className='font-bold'>Сколько денег мы заработали</span><br/> нашим<br/> экспертам</h2>
            <p className='w-[242px] ml-[43px] mt-[163px] text-[16px] font-bold'>Последнее обновление <span className='font-normal'>декабрь 2023</span></p>
            </div>
          <div className=' money relative right-[-214px]'>
            <Image className="absolute content-[''] l right-[166px] top-[274px]" src='/assets/img/money-2.png' alt='' width={612} height={265}/>
            <Image className='absolute content-[""] right-[300px] top-[200px] ' src='/assets/img/logo-black.png' alt='' width={205} height={64}/>
            <div className='absolute content-[""] top-[-100px] left-[170px]'>
              <span className='text-[#171717] font-medium text-[25px] leading-[20px]'>500 млн. $</span>
            </div>
            <div className='absolute content-[""] top-[100px] left-[-190px]'>
              <span className='text-[#171717] font-medium text-[25px] leading-[20px]'>100 млн. $</span>
            </div>
            <div className='absolute content-[""] bottom-[-30px] left-[-120px]'>
              <span className='text-[#171717] text-[20px] font-bold leading-[30px]'>Сейчас</span><br/>
              <span className='text-[#171717] font-medium text-[25px] leading-[25px] '>45,2 млн. $</span>
            </div>
          </div>
      </div>
    
   


    </section>
  )
}

export default Money
