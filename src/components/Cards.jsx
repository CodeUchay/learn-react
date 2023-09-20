import React from 'react';
import basic from '../images/basic.png'
import premium  from '../images/premium.png'
import gold from '../images/gold.png'

const Cards = () => {
  return (
    <div className=' w-full py-8 px-10 my-5  bg-[#121212] text-gray-300'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <a href="#section6">
          <div className='border border-primary-700 hover:bg-primary-900 w-full shadow-xl hover:shadow-primary-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" />
              <h2 className='text-2xl font-bold text-center py-3 text-white'>Basic</h2>
              <p className='text-center text-4xl font-bold text-white'>€9.99<span className='text-sm text-gray-500'>/hr</span></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-3'>Understanding react</p>
                  <p className='py-2 border-b mx-8'>React Front-end Basics</p>
                  <p className='py-2 border-b mx-8'>One final Portfolio Project</p>
              </div>
              <button className='bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Register</button>
          </div>
          </a>
          <a href="#section6">
          <div className=' w-full shadow-xl bg-[#ff12ac3a] hover:shadow-pink-900 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className=' w-40 mx-auto mt-[-6rem] bg-transparent hover:animate-bounce' src={premium} alt="/" />
              <h2 className='text-2xl font-bold text-center py-3 text-white'>Premium</h2>
              <p className='text-center text-4xl font-bold text-white'>€14.99<span className='text-sm text-gray-500'>/hr</span></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-3'>Advanced React Tools</p>
                  <p className='py-2 border-b mx-8'>3 final projects</p>
                  <p className='py-2 border-b mx-8'>Deployment and hosting</p>
              </div>
              <button className='bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Register</button>
          </div>
          </a>
          <a href="#section6">
          <div className='border border-pink-800 hover:bg-pink-800 w-full shadow-xl hover:shadow-[#ff12ac3a] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={gold} alt="/" />
              <h2 className='text-2xl font-bold text-center py-3 text-white'>Gold</h2>
              <p className='text-center text-4xl font-bold text-white'>€29.99<span className='text-sm text-gray-500'>/hr</span></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-3'>Fullstack Development</p>
                  <p className='py-2 border-b mx-8'>React.js, Node.js and Typescript.js</p>
                  <p className='py-2 border-b mx-8'>One Final Project</p>
              </div>
              <button className='bg-gradient-to-br text-white from-primary-500 to-secondary-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Register</button>
          </div>
          </a>
      </div>
    </div>
  );
};

export default Cards;