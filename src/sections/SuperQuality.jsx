import React from 'react'
import { Button } from '../components/Button'
import { arrowRight } from '../assets/icons'
import { perfume8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
        <div className='flex flex-1 flex-col'>
            <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>We Provide You
            <span className='text-coral-red'> Finest </span>
            <span className='text-coral-red'> Quality</span> Fragrances
            </h2> 
            <p className='mt-4 lg:max-w-lg info-text'>Experience premium scents and style with our meticulously crafted perfumes. Enjoy unmatched quality, innovation, and a touch of elegance in every fragrance.</p>
            <p className='mt-6 lg:max-w-lg info-text'>Committed to crafting the finest perfumes, we blend the world's best ingredients with expert precision, innovation, and unwavering dedication to quality.</p>
            <div className='mt-11'>
                <Button label='View details'/>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <img src={perfume8} alt="perfume8" width={570} height={522} className='rounded-xl'/>
        </div>
    </section>
  )
}

export default SuperQuality