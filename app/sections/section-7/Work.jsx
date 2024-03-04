import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div className=' relative flex flex-col ml-[22px] mr-[22px] rounded-[15px] bg-[#151515] w-[1396px] h-[3300px] z-20 '>
        <div className='text-center mt-[86px]'>
            <h2 className='text-[#ffffff] text-[61px] font-normal leading-[70px]'>Как мы <span className="font-bold">зарабатываем</span></h2>
            <h3 className=' text-[#ffffff] text-[31px] font-normal leading-[55px]'>с экспертами разных <br/> уровней</h3>
        </div>
    <div className=' mx-[118px] h-[500px] '>
{/* =====================================1=================================== */}
                    <div className=' bg-[#111111] box-border grid grid-cols-2 border-[1px] border-[--font-gray] rounded-[10px] mb-[40px]'>
                        <div className='relative ml-[33px]'>
                            <div className='w-[460px] h-[420px] mt-[60px]'>
                                <h3 className='text-[#C93030] text-[39px] font-bold leading-[20px]'>Начинающие эксперты</h3>

                                <div className='mt-[41px] flex flex-col gap-4'>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#C93030] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#C93030] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#C93030] rounded-full'></div>
                                </div>

                                <p className='text-[#ffffff] text-[25px] font-medium leading-[35px] mt-[157px] w-[301px] text-balance'>85% наших клиентов делают Х3 от их текущих результатов</p>

                            </div>
    
                        </div>
                        <div className='p-[20px]'>
                            <Image src='/assets/img/work-1.png' alt='' width={550} height={460}/>
                        </div>
    
                    </div>
{/* ==================================2======================================================= */}
                    <div className=' bg-[#111111] box-border grid grid-cols-2 border-[1px] border-[--font-gray] rounded-[10px] mb-[40px] '>

                    <div className='p-[20px]'>
                            <Image src='/assets/img/work-2.png' alt='' width={550} height={460}/>
                        </div>
                        <div className='ml-[33px]'>
                            <div className='w-[460px] h-[420px] mt-[60px]'>
                                <h3 className='text-[#27FE04] text-[39px] font-bold leading-[45px] w-[484px]'>Действующие<br/> эксперты или<br/> онлайн-школы</h3>
                                <div className='mt-[25px] mb-[25px] flex flex-col gap-4'>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#27FE04] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#27FE04] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#27FE04] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#27FE04] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#27FE04] rounded-full'></div>
                                </div>

                                <p className='w-[484px] text-[#ffffff] text-[25px] font-medium leading-[35px] mt-[10px] text-balance'>Пробьем потолок по заработку вместе с тобой и выведем твой проект на международный рынок без границ</p>
    
                            </div>
    
                        </div>

                    </div>
   {/* ========================================3=================================================== */}
   <div className=' bg-[#111111] box-border grid grid-cols-2 border-[1px] border-[--font-gray] rounded-[10px] mb-[40px]'>
                        <div className='ml-[33px]'>
                            <div className='w-[460px] h-[420px] mt-[60px]'>
                                <h3 className='text-[#FE9604] text-[39px] font-bold leading-5 '>Продюсеры </h3>
                                <div className='mt-[33px] mb-[115px] flex flex-col gap-4'>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#FE9604] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#FE9604] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#FE9604] rounded-full'></div>
                                </div>

                                <p className='text-[#ffffff] text-[25px] font-medium leading-[35px] text-balance w-[514px]'>Более 500 экспертов в нашей базе по 15 нишам(твердые и мягких) с которыми мы можем вместе с тобой создавать крутые продукты на международном рынке</p>
    
                            </div>
    
                        </div>
                        <div className='p-[20px]'>
                            <Image src='/assets/img/work-3.png' alt='' width={550} height={460}/>
                        </div>
    
                    </div>
{/* ======================================4============================================================ */}
<div className=' bg-[#111111] box-border grid grid-cols-2 border-[1px] border-[--font-gray] rounded-[10px] mb-[40px]'>

                    <div className='p-[20px]'>
                            <Image src='/assets/img/work-4.png' alt='' width={550} height={460}/>
                        </div>
                        <div className='ml-[33px]'>
                            <div className='w-[460px] h-[420px] mt-[60px]'>
                                <h3 className='text-[#46B1A5] text-[39px] font-bold leading-[45px] '>Блогеры в поисках продукта для своей ЦА</h3>

                                <div className='mt-[33px] mb-[57px] flex flex-col gap-4'>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#46B1A5] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#46B1A5] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px]  rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#46B1A5] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#46B1A5] rounded-full'></div>
                                </div>
                                <p className='text-[#ffffff] text-[25px] font-medium leading-[35px] '>Подберем продукт и запустим на холодный трафик с выводом на международный рынок за 14 дней</p>
    
                            </div>
    
                        </div>

                    </div>

{/* ==========================5=============================== */}

<div className=' bg-[#111111] box-border grid grid-cols-2 border-[1px] border-[--font-gray] rounded-[10px] mb-[40px]'>
                        <div className='ml-[33px]'>
                            <div className='w-[460px] h-[420px] mt-[60px]'>
                                <h3 className='text-[#146EF4] text-[39px] font-bold leading-5 '>Инвесторы</h3>

                                <div className='mt-[32px] mb-[121px] flex flex-col gap-[42px]'>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#146EF4] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#146EF4] rounded-full'></div>
                                    <div className='transition-all w-[9px] h-[9px] bg-[#146EF4] rounded-full'></div>
                                </div>
                                
                              
                                <p className='text-[#ffffff] text-[25px] font-medium leading-[35px] '>Покупка доли прибыльной онлайн школы с текущими результатами</p>
    
                            </div>
    
                        </div>
                        <div className='p-[20px]'>
                            <Image src='/assets/img/work-5.png' alt='' width={550} height={460}/>
                        </div>
    
                    </div> 

                     <div className='relative'><Image className='absolute left-[578px] top-[40px]' src='/assets/img/Vector-135.svg' alt='' width={38} height={38} /></div>
                 

                    <div className='mt-[151px] mb-[99px] w-[706px] h-[120px]'>
                        <h3 className='text-[#ffffff] text-[49px] leading-[60px] text-center w-[1196px] font-normal '>Рост для новичков и масштаб<br/> для монстров</h3>
                    </div>

                </div>
                </div>
  )
}

export default Work
