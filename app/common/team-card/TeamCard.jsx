import React from 'react'

const TeamCard = ({title, description}) => {
  return (
    <div className='w-[299px] h-[190px] ring-[1px] ring-[#343434] items-center gap-[18px]  pl-[34px] pr-[19px] pb-[32px] pt-[36px]'><h4 className='text-[#ffffff] mb-[10px]'>{title}</h4> <p className='text-[#7C7C7C]'>{description}</p>
    </div>
  )
}

export default TeamCard
