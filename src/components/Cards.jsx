import React from 'react';
import basic from '../images/basic.png'
import premium  from '../images/premium.png'
import gold from '../images/gold.png'

const Cards = () => {
  return (
    <div className=' w-full py-8 px-10 my-5  bg-[#121212] text-gray-300'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='border border-primary-700 hover:bg-primary-900 w-full shadow-xl hover:shadow-primary-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" />
              <h2 className='text-2xl font-bold text-center py-3 text-white'>Basic</h2>
              <p className='text-center text-4xl font-bold text-white'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-3'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          {/* bg-[#ffa8e03a] */}
          <div className=' w-full shadow-xl bg-[#ff12ac3a] hover:shadow-pink-900 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className=' w-40 mx-auto mt-[-6rem] bg-transparent hover:animate-bounce' src={premium} alt="/" />
              <h2 className='text-2xl font-bold text-center py-3 text-white'>Premium</h2>
              <p className='text-center text-4xl font-bold text-white'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-3'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='border border-pink-800 hover:bg-pink-800 w-full shadow-xl hover:shadow-[#ff12ac3a] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={gold} alt="/" />
              <h2 className='text-2xl font-bold text-center py-3 text-white'>Gold</h2>
              <p className='text-center text-4xl font-bold text-white'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-3'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-gradient-to-br text-white from-primary-500 to-secondary-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;