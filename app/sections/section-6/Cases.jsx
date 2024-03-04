import Image from 'next/image'
import React from 'react'

const Cases = () => {
  return (
    <section className=''>
       <div className='flex flex-col justify-center items-center gap-[10px] mb-[34px]'> 
        <h2 className='text-[61px] font-bold leading-[40px] uppercase'>Кейсы </h2>
        <p className='text-[20px] leading-[40px] font-medium'>Продвижения экспертов и онлайн-школ</p>
        </div>

        <div className='flex m-auto w-[1043px] h-[50px] mb-[46px]'>
            <div className='w-[130px] h-[50px] rounded-[10px] bg-[#ffffff] mr-[10px]'></div>
            <div className='w-[139px] h-[50px] rounded-[10px] bg-[#46B1A5] mr-[10px]'></div>
            <div className='w-[148px] h-[50px] rounded-[10px] bg-[#ffffff] mr-[10px]'></div>
            <div className='w-[177px] h-[50px] rounded-[10px] bg-[#ffffff] mr-[10px] '><span className='leading-[50px] text-[16px] font-normal px-[29px]'>Маркетплейсы</span></div>
            <div className='w-[139px] h-[50px] rounded-[10px] bg-[#ffffff] mr-[10px]'></div>
            <div className='w-[144px] h-[50px] rounded-[10px] bg-[#ffffff] mr-[10px] '><span className='leading-[50px] text-[16px] font-normal px-[29px]'>Профессии</span></div>
            <div className='w-[106px] h-[50px] rounded-[10px] bg-[#ffffff] mr-[10px] '><span className='leading-[50px] text-[16px] font-normal px-[29px]'>Хобби</span></div>
        </div>
        {/* =================Slider==================================== */}
       <div className='flex flex-col justify-center'>
            <div className='flex gap-[66px] justify-center relative'>
                
                <div  className=' flex flex-col w-[688px] h-[674px] rounded-t-[10px]  '>
                    <Image src='/assets/img/laptop.png' alt='' width={688} height={340}/>
                    <div className='flex bg-[#ffffff] gap-[62px]  mb-[64px] pb-[64px] rounded-b-[10px] '>
                        <div className='w-[180px] ml-[36px] mt-[22px]'>
                            <p className='text-[20px] font-medium'>Ниша:</p>
                            <h4 className='text-[31px] font-bold'>Ecommerce</h4>
                        </div>
                        <div className='flex flex-col gap-[10px] mt-[98px] w-[378px] '>
                        <div className='flex gap-[10px] h-[30px]'>
                            <Image className='w-[25px] h-[25px]' src='/assets/img/green-btn.png' alt=''width={25} height={25}/>
                            <p  className='text-[16px] leading-[20px]'>Средний чек продажи - <span>700 €</span></p>
                        </div>
                        <div className='flex  gap-[10px] h-[60px]'>
                            <Image className='w-[25px] h-[25px]' src='/assets/img/green-btn.png' alt=''width={25} height={25}/>
                            <p  className='text-[16px] leading-[20px] w-[330px]'><span>Период 1</span> - тест Стоимость МВП - $5000 Стоимость регистрации - $2.8, ROMI - 380%</p>
                        </div>
                        <div className='flex  gap-[10px] h-[62px]'>
                            <Image className='w-[25px] h-[25px]' src='/assets/img/green-btn.png' alt=''width={25} height={25}/>
                            <p className='text-[16px] leading-[20px]'><span>Период 2</span> - масштабирование. Бюджет в месяц - $100к . Стоимость регистрации - $1.7, ROMI - 460%</p>
                        </div>
                        </div>
                    </div>
    
    
                </div>
                <div className='btns absolute inset-0 flex items-center justify-between'>
                    <div className=' ml-[-66px]'>
    
                    <button className=' bg-[url("/assets/img/left.png")] w-[448px] h-[440px]  ml-[-66px] ' ><Image className=' ml-[316px]' src='/assets/img/arrow-left.png' alt='' width={60} height={60}/></button>
    
    
                        {/* <button className=' bg-[url("/assets/img/left.png")] w-[448px] h-[440px] '><Image className='block' src='/assets/img/arrow-left.png' alt='' width={60} height={60}/></button> */}
                    </div>
                    <div className='mr-[-66px] '>
    
                    <button className='bg-[url("/assets/img/right.png")] w-[448px] h-[440px] mr-[-66px] ' ><Image className='ml-[72px]' src='/assets/img/arrow-right.png' alt='' width={60} height={60}/></button>
    
                    {/* <button className='bg-[url("/assets/img/right.png")] w-[448px] h-[440px] '><Image src='/assets/img/arrow-right.png' alt='' width={60} height={60}/></button> */}
                    </div>
                </div>
    
            </div>
    
                {/* пагинация */}
                
           <div className='block m-auto mb-[134px]'>
                <div className="flex items-center justify-center gap-[6px] w-[68px] h-[14px] mt-[42px]">
                <div className='transition-all w-[14px] h-[14px] bg-[#FE9604] rounded-full'></div>
                <div className='transition-all w-[8px] h-[8px] bg-[#D6D6D6] rounded-full'></div>
                <div className='transition-all w-[8px] h-[8px] bg-[#D6D6D6] rounded-full'></div>
                <div className='transition-all w-[8px] h-[8px] bg-[#D6D6D6] rounded-full'></div>
                <div className='transition-all w-[8px] h-[8px] bg-[#D6D6D6] rounded-full'></div>
                </div>
           </div>
        
       </div>

    </section>
    )
} 

export default Cases
