import React from 'react'
import { star } from '../assets/icons'
import Modal from './Modal'
import { useState } from 'react'
const PopularProductsCard = ({ imgURL, name, price, rating, desc }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} onClick={() => setOpen(true)} 
        className='w-[280px] h-[280px] rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-105' />
        <div className='mt-4 flex justify-start gap-2.5'>
            <img src={star} alt="rating" width={24} height={24}/>
            <p className='text-xl leading-normal text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal'>{price}</p>
      <Modal open={open} onClose={() => setOpen(false)}>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] rounded-xl'/>
        <div className='flex flex-col justify-start gap-5 ml-5'>
            <h2 className='text-4xl font-palanquin font-bold'> {name} </h2>
            <p className='lg:max-w-lg font-montserrat text-slate-gray-600 text-xl'>{price} </p>
            <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>{desc}</p>
        </div>
      </Modal>
    </div>
  )
}

export default PopularProductsCard