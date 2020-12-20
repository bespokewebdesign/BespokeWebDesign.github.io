import React from "react";

export const Home = () => {
  return (
    <div className='pt-18 flex content-center items-center justify-center min-h-screen-75'>
      <div
        className='absolute top-0 w-full h-full bg-cover bg-fixed mx-auto'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')",
        }}>
        <span
          id='blackOverlay'
          className='w-full h-full absolute opacity-75 bg-black'></span>
      </div>
      <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap pt-32 mt-12'>
          <div className='w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-6/12 md:w-10/12 sm:w-full xs:w-full mx-auto text-center'>
            <div className=''>
              <h1 className='text-white font-bold text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl'>
                300,000,000 websites on the internet, stand out from the crowd.
              </h1>
              <p className='mt-3 text-xl px-4 text-white'>
                {" "}
                With our exceptional services which promise to deliver
                exceptional results that go beyond simply delivering an
                incredible end product.
              </p>
            </div>
            <div className='text-center mt-8 pb-16'>
              <a
                href='#contact'
                className='bg-green-500 text-gray-900 hover:bg-green-700 text-lg font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg hover::bg-green-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='submit'>
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px'
        style={{ transform: "translateZ(0)" }}>
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'>
          <polygon
            className='text-gray-300 fill-current'
            points='2560 0 2560 100 0 100'></polygon>
        </svg>
      </div>
    </div>
  );
};
