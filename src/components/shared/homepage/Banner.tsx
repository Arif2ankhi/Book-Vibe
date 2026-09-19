import Image from 'next/image';
import React from 'react';
import bannerImg from'@/assets/hero_img.jpg'

const Banner = () => {
    return (
       <section className='m-8'>
         <div className=' bg-slate-300 container mx-auto grid grid-cols-2
          gap-4 items-center rounded-3xl'>
            <div className='ml-6'>
                <h2 className="font-bold text-5xl p-4">Book s freshen up <br /> your bookshelf</h2>
                <button className='btn btn-success mt-6 ml-6'> View the Task</button>

            </div>


            <div>

        <Image src={bannerImg}/>
            </div>
        </div>
       </section>
    );
};

export default Banner;