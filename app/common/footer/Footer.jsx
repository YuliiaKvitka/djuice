import Image from 'next/image';


const Footer = () => {
  return (
    <footer className=' relative mt-[70px] bg-[#171717] h-[222px]'>
      <Image  className='absolute content-[""] top-[-27px] right-[47px]' src='/assets/img/up-btn.png' alt='' width={55} height={55}/>
       <div className='flex justify-between pt-[150px] ml-[26px] mr-[26px] mb-[25px]'>
            <div className=' '><Image src='/assets/img/logo.png' alt="" width={186} height={59}/></div>
            <ul className='text-[#fff] flex gap-[10px]'>
                <li><Image src='/assets/img/instagram.png' alt='' width={55} height={55}/></li>
                <li><Image src='/assets/img/facebook.png' alt='' width={55} height={55}/></li>
                <li><Image src='/assets/img/telegram.png' alt='' width={55} height={55}/></li>
                <li><Image src='/assets/img/youtube.png' alt='' width={55} height={55}/></li>
                <li><Image src='/assets/img/tiktok.png' alt='' width={55} height={55}/></li>
            
            </ul>
            <span className='text-[#ffffff] pt-[30px]'>© 2015-2024 DJUICE.</span>
       </div>
      
    </footer>
  )
}

export default Footer
