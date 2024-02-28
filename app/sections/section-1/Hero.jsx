import Image from 'next/image'
import './styles.css'

const Hero = () => {
  return (
    <section className=" relative hero_section  bg-[--bg-black] rounded-b-[15px]">
      
      <div className='flex'>
        <div className='hero-content flex flex-col w-[694px]'>
          <div className='hero_title_wrapper z-10'>
            <h1 className='h1_title hero_title z-10'>Создадим</h1>
            <h3 className='h3_title hero_title_h3 font-normal z-10' >прибыльную <span className='font-bold'>онлайн школу</span></h3>
            <span className='label_orange'>вместе</span>
          </div>
          <div className='w-[336px] h-[202px] '>
            <ul className='hero_list z-10'>
          
              <li className='flex gap-2'><Image src='/assets/img/galochka.png' alt='galochka' width={16} height={10}/>Наша команда 50+ профессионалов</li>
              <li className='flex gap-2'><Image src='/assets/img/galochka.png' alt='galochka' width={16} height={10}/>Наша команда 50+ профессионалов</li>
              <li className='flex gap-2'><Image src='/assets/img/galochka.png' alt='galochka' width={16} height={10}/>Запускаем экспертов за свои деньги</li>
            </ul>
          </div>
          <div className='buttons flex-row gap-3 z-10 ml-[100px] mt-[100px]'>
            <button className='w-[235px] h-[60px] bg-[#5F42D4] rounded-[10px] font-bold text-white mr-[10px]'>Начать зарабатывать</button>
            <button className='w-[188px] h-[60px] bg-transparent rounded-[10px] font-bold text-white ring-offset-[#46b1a5] ring-1'>Хочу масштаб Х2</button>
          </div>
          
        </div>
        <div className='z-10 mt-[258px] relative'>
          <Image className='rus_img ' src='/assets/img/rus.png' alt='rus' width={505} height={688}/>
          <Image className=' absolute el_green ' src='/assets/img/Ellipse-26.png' alt='el' width={400} height={400}/>
          <Image className=' absolute el_purple ' src='/assets/img/Ellipse-27.png' alt='el' width={362} height={362}/>
        </div>
        
      </div>
      <Image className=' absolute el_45 ' src='/assets/img/Ellipse-45.png' alt='el' width={429} height={429}/>

     <div className="absolute content-[''] w-[648px] h-[284px] right-[117px] bottom-[737px] z-50" >

    
        <div className=' flex gap-[10px] w-[183px] h-[50px] bg-[#FFFFFF] rounded-xl left-[57px] bottom-[0px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/startup-1.png' width={24.37} height={24.37} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Отдел продаж</p>
        </div>
  
        <div className=' flex gap-[10px] w-[150px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[117px] ml-[-57px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/data-analytics-1.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Аналитика</p>
        </div>
  
        <div className=' flex gap-[10px] w-[140px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[-167px] ml-[451px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/sales-funnel-1.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Воронки</p>
        </div>

        <div className=' flex gap-[10px] w-[204px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[130px] ml-[300px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/stack-of-books-1.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Команда продукта</p>
        </div>

        <div className=' flex gap-[10px] w-[204px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[-350px] ml-[350px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/online_class_group_session.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Вебинары</p>
        </div>
  
  
   
     
     </div>
       </section>


    // <section className="bg-[url('/assets/img/bg-img.png')] w-[1440px] h-[1513px] bg-no-repeat  bg-center bg-cover text-center">
      
    // </section>
  )
}

export default Hero

