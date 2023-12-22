import React from 'react'

const PerfumeCard = ({ imgURL, changeBigPerfumeImage, bigPerfumeImg }) => {

    const handleClick = () => {
        if(bigPerfumeImg !== imgURL.bigPerfume) {
            changeBigPerfumeImage(imgURL.bigPerfume)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigPerfumeImg === imgURL.bigPerfume ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgURL.thumbnail} alt="show col"
                className='object-contain w-full h-full rounded-xl'/>
            </div>
        </div>
    )
}

export default PerfumeCard