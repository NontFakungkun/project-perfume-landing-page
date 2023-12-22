import React from 'react'
import { Button } from '../components/Button'
import PerfumeCard from '../components/PerfumeCard'
import { arrowRight } from '../assets/icons'
import { statistics, perfumes } from '../constants'
import { bigPerfume1 } from '../assets/images'
import { useState } from 'react'


const Hero = () => {
  const [bigPerfumeImg, setBigPerfumeImg] = useState(bigPerfume1)

  return (
    <section
    id='home'
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Fragrances</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The Scents</span> <br />
          of <span className='text-coral-red inline-block mt-3'>Le labo</span>
        </h1> 
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Explore Le Labo's signature scents for your personal style.</p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat,index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 '>
        <img src={bigPerfumeImg} alt="perfume collection" width={610} height={500}
        className='object-contain relative z-2 w-full rounded-xl'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-3'>
          {perfumes.map((perfume, index) => (
            <div key={index}>
              <PerfumeCard imgURL={perfume} changeBigPerfumeImage={(perfume) => setBigPerfumeImg(perfume)} bigPerfumeImg={bigPerfumeImg}/>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero