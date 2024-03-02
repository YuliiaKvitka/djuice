import TeamCard from '@/app/common/team-card/TeamCard';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const items=[
  {
    "id": 1,
    "title": "Маркетологи" ,
    "description":"Оптимизация холодного трафика через воронки, прогрев через телеграм и Instagram",
  },
  {
    "id": 2,
    "title": "Методологи" ,
    "description":"распаковка экспертности и запаковка в курс обучения с элементами геймификации и пошаговым планом",
  },
  {
    "id": 3,
    "title": "HR" ,
    "description":"Подбор кадров и проведение обучения для различных позиций в онлайн-школе",
  },
  {
    "id": 4 ,
    "title": "Оптимизаторы + интеграторы" ,
    "description":"ИТ решения проверенные на СRM LMS телефония",
  },
  {
    "id": 5 ,
    "title": "Работа с блогерами" ,
    "description": "3000 всего, база 600 — это 1 млн / по Укр",
  },
  {
    "id": 6 ,
    "title": "SERM" ,
    "description":"380 форумов под UA",
  },
  {
    "id": 7 ,
    "title": "Социальные сети" ,
    "description":"Использование различных платформ для распространения контента и привлечения аудитории",
  },
  {
    "id": 8 ,
    "title": "Юристы" ,
    "description":"Полное сопровождение под ключ и защита репутации в сети",
  },
  {
    "id": 9 ,
    "title": "Финансы" ,
    "description":"Умение правильно принимать деньги",
  },
  {
    "id": 10 ,
    "title": "Отдел возвратов" ,
    "description":"10+ менеджеров которые умеют сохранить деньги в компании и не отпустить с негативом ученика",
  },
  {
    "id": 11 ,
    "title": "Отдел заботы" ,
    "description":"Персональные менеджеры помогут решить любой индивидуальный вопрос",
  },
  {
    "id": 12 ,
    "title": "Кураторы" ,
    "description":"Команда кураторов по обучению и сопровождению учеников",
  },
  {
    "id": 13 ,
    "title": "Ресерч команда" ,
    "description":"Поиск экспертов и база 1000+ в 15 разных нишах",
  },
  {
    "id": 14 ,
    "title": "ОП" ,
    "description":"50+ продажников",
  },
  {
    "id": 15 ,
    "title": "Программисты" ,
    "description":"Digital twin / тонченжер записи курсов ИИ платформа с ИИ",
  },
]

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

      {items.map((item) => (
                <TeamCard key={item.id}   title={item.title} description={item.description} />
            ))}
     












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
