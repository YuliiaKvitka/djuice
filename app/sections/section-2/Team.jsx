import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const Team = () => {
  return (
<section className='team_section mt-[120px]'>

<div className='flex gap-[67px] relative'>
  <div className='ml-[106px] mr-[47px] w-[358px]'> 
  <p className='text_label_white mb-[20px]'>Видео обращение от основателей </p>
  <h2 className='h2_title w-[358px] leading-[70px]'>Кто такие <span className='font-extrabold	'>djuice</span></h2>

  <button className=' relative w-[243px] h-[60px] bg-[#5F42D4] rounded-[10px] font-bold text-white mr-[10px] mt-[48px] uppercase p-x-[27px]'>Начать зарабатывать<IoIosArrowForward  className="absolute w-[15px] h-[15px] ml-[220px] mt-[-19px] content-[''] "/></button>

  <Image className="absolute  content-[''] mt-[-145px] ml-[270px]"src='/assets/img/Vector-134.svg' alt=''width={39} height={40}/>
  </div>
    <Image className='z-10' src='/assets/img/video.png' alt='' width={820} height={488}/>
</div>  

<div className=' flex  py-[109px] px-[59px] bg-[#171717] w-[1413px] h-[1960px] rounded-[15px] mt-[-95px] mr-[17px] ml-[22px]'>

<div className=' relative h-[245.8px] w-[50%]'>
        <Image className="absolute  content-[''] top-[-25px] left-[15px] color-[#FE9604]"src='/assets/img/Vector-135.svg' alt=''width={38} height={39}/>
        <div className='mt-[70.12px] ml-[26px] mb-[41.2px]'>
            <h2 className='h2_title text-[#ffffff] w-[711px]'>Наша команда <span className='font-extrabold'>состоит из:</span></h2>
            <span className=" absolute content-[''] w-[169.74px] h-[40.37px] left-[414.92px] top-[220px] rounded-[10px] bg-[#FE9604] rotate-[-4.37deg] text-[#ffffff] text-[20px] uppercase font-bold leading-[1.2] text-center p-[7px]">все под ключ</span>
        </div>
      </div>

      <div className='grid  grid-cols-2 grid-row-8 gap-x-[23px]  '>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px] '><h4 className='text-[#ffffff] mb-[10px]'>Маркетологи</h4> <p className='text-[#7C7C7C]'>Оптимизация холодного трафика через воронки, прогрев через телеграм и Instagram</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Методологи</h4> <p className='text-[#7C7C7C]'>распаковка экспертности и запаковка в курс обучения с элементами геймификации и пошаговым планом</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>HR</h4> <p className='text-[#7C7C7C]'>Подбор кадров и проведение обучения для различных позиций в онлайн-школе</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Оптимизаторы + интеграторы</h4> <p className='text-[#7C7C7C]'>ИТ решения проверенные на СRM LMS телефония</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Работа с блогерами</h4> <p className='text-[#7C7C7C]'>3000 всего, база 600 — это 
1 млн / по Укр</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>SERM</h4> <p className='text-[#7C7C7C]'>380 форумов под UA</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Социальные сети </h4> <p className='text-[#7C7C7C]'>Использование различных платформ для распространения контента и привлечения аудитории</p>
      </div>

   

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Юристы</h4> <p className='text-[#7C7C7C]'>Полное сопровождение под ключ и защита репутации в сети</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Финансы</h4> <p className='text-[#7C7C7C]'>Умение правильно принимать деньги</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Отдел возвратов</h4> <p className='text-[#7C7C7C]'>10+ менеджеров которые умеют сохранить деньги в компании и не отпустить с негативом ученика</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Отдел заботы</h4> <p className='text-[#7C7C7C]'>Персональные менеджеры помогут решить любой индивидуальный вопрос</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Кураторы</h4> <p className='text-[#7C7C7C]'>Команда кураторов по обучению и сопровождению учеников</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Ресерч команда</h4> <p className='text-[#7C7C7C]'>Поиск экспертов и база 1000+ в 15 разных нишах</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>ОП</h4> <p className='text-[#7C7C7C]'>50+ продажников</p>
      </div>

      <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Програмисты</h4> <p className='text-[#7C7C7C]'>Digital twin / тонченжер записи курсов ИИ платформа с ИИ</p>
      </div>












      </div>



  





</div>


</section>
)
}
export default Team;





  
  

  
  
  
  

  // {/* 
  // </div> */}
  // {/* 
  // 
  // </div> */}
  // {/* 
  // <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>Методологи</h4> <p className='text-[#7C7C7C]'>распаковка экспертности и запаковка в курс обучения с элементами геймификации и пошаговым планом.</p>
  // </div> */}
  // </div>
  // {/* </div> */} */}
