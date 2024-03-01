import Image from 'next/image'
import './styles.css';
import { IoIosArrowForward } from "react-icons/io";
import Header from '@/app/common/header/Header';

const Hero = () => {
  return (
    <section className=" relative hero_section  bg-[--bg-black] rounded-b-[15px]">
      <Header/>
      
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
          <div className=' relative buttons flex-row gap-3 z-10 ml-[100px] mt-[120px]'>
            <Image className='absolute left-[170px]' src='/assets/img/arrow-click.png' alt='click' width={99} height={109}/>
            <button className=' relative w-[235px] h-[60px] bg-[#5F42D4] rounded-[10px] font-bold text-white mr-[10px] mt-[100px]'>Начать зарабатывать<IoIosArrowForward  className="absolute w-[15px] h-[15px] ml-[205px] mt-[-18px] content-[''] "/></button>
            <button className='w-[188px] h-[60px] bg-transparent rounded-[10px] font-bold text-white ring-offset-[#46b1a5] ring-1'>Хочу масштаб Х2</button>
          </div>
          
        </div>
        <div className='z-10 mt-[258px] ml-[100px] relative'>
          <Image className='rus_img ' src='/assets/img/rus.png' alt='rus' width={505} height={688}/>
          <Image className=' absolute el_green ' src='/assets/img/Ellipse-26.png' alt='el' width={400} height={400}/>
          <Image className=" absolute el_purple content-[''] " src='/assets/img/Ellipse-27.png' alt='el' width={362} height={362}/>

          <Image className="absolute content-[''] left-[-10px] top-[100px]" src='/assets/img/Vector-132.png' alt='' width={117} height={120}/>
          <Image className="absolute content-[''] left-[550px] top-[500px]" src='/assets/img/Vector-133.png' alt='' width={39} height={40}/>
        </div>
        
      </div>
      <Image className=' absolute el_45  ' src='/assets/img/Ellipse-45.png' alt='el' width={429} height={429}/>

      <div className="absolute content-[''] w-[648px] h-[284px] right-[117px] bottom-[737px] z-50" >

    
        <div className=' flex gap-[10px] w-[183px] h-[50px] bg-[#FFFFFF] rounded-xl ml-[90px] mt-[10px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/startup-1.png' width={24.37} height={24.37} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Отдел продаж</p>
        </div>
  
        <div className=' flex gap-[10px] w-[150px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[117px] ml-[30px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/data-analytics-1.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Аналитика</p>
        </div>
  
        <div className=' flex gap-[10px] w-[140px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[-167px] ml-[451px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/sales-funnel-1.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Воронки</p>
        </div>

        <div className=' flex gap-[10px] w-[204px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[130px] ml-[450px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/stack-of-books-1.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Команда продукта</p>
        </div>

        <div className=' flex gap-[10px] w-[140px] h-[50px] bg-[#FFFFFF] rounded-xl mt-[-350px] ml-[450px] shadow-[2px_18px_32.8px_0px_rgba(0, 0, 0, 0.12)) '><Image className='ml-[18px] mt-[10px] mb-[10px]' src='/assets/img/online_class_group_session.png' width={28} height={28} alt='' />
        <p className='mt-[13px] mb-[10px] text_label_white'>Вебинары</p>
        </div>

        <div className='author w-[186px] h-[70px]      mt-[350px] ml-[250px] '>
        <p className='p-[23px] mt-[13px] mb-[10px] w-[186px] h-[70px]  '>Руслан Савинкин</p>
        </div>
  

    </div>
    <div className='absolute w-[1394px] h-[522px] ml-[24px] mr-[22px] bg-[#ffffff] rounded-[15px] z-[50]'>
      <h2 className='text-center h2_title mt-[32px] mb-[80px]'><span className='font-extrabold	'>Цифры </span>о нас</h2>
      <div className='digital_block grid  grid-cols-3 gap-x-[92px] gap-y-[80px] ml-[82px] mr-[75px]' >
       
          <div className='grid grid-cols-[80px_276px] items-center gap-[18px] w-[374px] h-[80px] text-balance '><Image src='/assets/img/icon-1.png' alt='' width={80} height={80} /><p>За 2023 «отлито» на трафик больше 3 млн $</p></div>

          <div className='grid grid-cols-[80px_276px] items-center gap-[18px] w-[374px] h-[80px] text-balance'><Image src='/assets/img/icon-2.png' alt='' width={80} height={80} /><p>Автоматизированный запуск MVP версии за 14 дней</p> </div>

          <div className='grid grid-cols-[80px_276px] items-center gap-[18px] w-[374px] h-[80px] text-balance'><Image src='/assets/img/icon-3.png' alt='' width={80} height={80} /><p>50+ профессионалов в команде</p></div>

          <div className='grid grid-cols-[80px_276px] items-center gap-[18px] w-[374px] h-[80px] text-balance'><Image src='/assets/img/icon-4.png' alt='' width={80} height={80} /><p>Средний ROMI по проектам +300-500%</p></div>

          <div className='grid grid-cols-[80px_276px] items-center gap-[18px] w-[374px] h-[80px] text-balance'><Image src='/assets/img/icon-5.png' alt='' width={80} height={80} /><p>10+ популярных ниш
с проверенной экспертизой по запускам</p></div>

          <div className='grid grid-cols-[80px_276px] items-center gap-[18px] w-[374px] h-[80px] text-balance'><Image src='/assets/img/icon-6.png' alt='' width={80} height={80} /><p>5+ млн $ заработано экспертам по всем продуктам за 2023</p></div>
     
     </div>

    </div>
    </section>



  )
}

export default Hero

