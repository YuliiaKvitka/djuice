
import ServiceCard from "@/app/common/sevice-card/ServiceCard";
import { BsArrowRightCircle } from "react-icons/bs";

const Servises = () => {
  return (
    <section className='mt-[69px] ml-[49px] mr-[49px]'>
        <div className='grid grid-cols-2 grid-row-9 gap-x-[24px] gap-y-[20px]'>
                {/* card 1 */}
            
            <ServiceCard />

            {/* cadrd 2 */}
            <div className=' flex justify-between w-[659px] h-[210px]  rounded-[10px] bg-[#ffffff] shadow-lg'>

                <div className=' flex flex-col justify-between w-[190px] h-[190px]  ring-[1px] ring-[#5F42D4] rounded-[10px] mt-[10px] ml-[10px] mb-[10px]'>
                    <h5 className='text-[#5F42D4] text-[16px] font-bold mt-[13px] ml-[18px]'>Услуга</h5>
                    <div className='flex justify-end mr-[18px] mb-[10px]'>
                        <span className='text-[25px] text-[#5F42D4] font-bold'>#</span><span className='text-[49px] text-[#5F42D4] font-bold'>02.</span>
                        </div>
                </div>

            <div className="flex flex-col justify-between">
                <div className='w-[353px] mr-[77px]  mt-[25px]'>
                    <h4 className='text-[31px] font-bold leading-[35px] mb-[20px]'>Запуск+прогрев к курсу под ключ</h4>
                    <p className='text-[16px] w-[267px] leading-5'>от 10000тіс на трафик</p>
                </div>
                <div className="flex items-center justify-end gap-[8px] mb-[15px] mr-[15px]"><p>Подробнее</p><BsArrowRightCircle size={35} color="#171717"/></div>
            </div>

            </div>


        </div>
     
    </section>
  )
}

export default Servises
