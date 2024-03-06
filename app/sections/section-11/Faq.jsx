import Image from 'next/image'
import React from 'react'

const Faq = () => {
  return (
    <section className='w-[1396px]  bg-[#171717] py-[100px] m-auto rounded-[15px]'>
        <h2 className='text-[#ffffff] text-[61px] font-bold text-center pb-[45px]'>FAQ</h2>


        <div className='flex flex-col gap-[60px] '>
            
                <div className='faq_block'>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Я правильно понял что от меня не нужно денег? И если у меня есть хороший продукт то вы готовы в него инвестировать?</h3>
                        </div>
                        <Image src='/assets/img/faq-up.png' alt='' width={35} height={35}/>
            
                    </div>
    
                    <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                    <p className='text-[#ffffff] text-[16px] leading-[25px] font-medium w-[785px] ml-[118px]'>Да все верно. Мы всегда открыты к совместной работе с экспертами абсолютно в любой нише. Главное — наличие продукта которым дает результаты и довольных учеников, продукт который вы готовы развивать и становиться лидерами рынка.</p>
                </div>
    
                <div className='faq_block'>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Какая зона ответственности моя как эксперта и ваша?</h3>
                        </div>
                        <Image src='/assets/img/faq-down.png' alt='' width={35} height={35}/>
            
                    </div>
                        <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                </div>

                <div className='faq_block'>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Как мы делим деньги?</h3>
                        </div>
                        <Image src='/assets/img/faq-down.png' alt='' width={35} height={35}/>
            
                    </div>
                        <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                </div>

                <div className='faq_block'>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Вам не кажется, что 14 дней слишком быстро для запуска онлайн-школы? Как это скажется на качестве проекта?</h3>
                        </div>
                        <Image src='/assets/img/faq-down.png' alt='' width={35} height={35}/>
            
                    </div>
                        <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                </div>

                <div className='faq_block'>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Какая зона ответственности моя как эксперта и ваша?</h3>
                        </div>
                        <Image src='/assets/img/faq-down.png' alt='' width={35} height={35}/>
            
                    </div>
                        <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                </div>

                <div className='faq_block'>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Какая зона ответственности моя как эксперта и ваша?</h3>
                        </div>
                        <Image src='/assets/img/faq-down.png' alt='' width={35} height={35}/>
            
                    </div>
                        <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                </div>

                <div className='faq_block '>
                    <div className=' flex justify-between items-center ml-[118px] w-[1160px] '>
            
                        <div className='w-[785px]'> <h3 className='text-[#ffffff] text-[20px] leading-[25px] font-bold' >Вам не кажется, что 14 дней слишком быстро для запуска онлайн-школы? Как это скажется на качестве проекта?</h3>
                        </div>
                        <Image src='/assets/img/faq-down.png' alt='' width={35} height={35}/>
            
                    </div>
                        <hr className='ml-[118px] mt-[19.5px] size-[1px] w-[1160px] border-[#696969]'/>
                </div>
        </div>

    
    </section>
    )
}

export default Faq
