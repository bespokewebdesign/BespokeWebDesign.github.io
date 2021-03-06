import React from "react";

export const Portfolio = () => {
  return (
    <>
      <div className='bg-gray-300' id='portfolio'>
        <div className='container mx-auto justify-center text-center flex flex-wrap'>
          <div className='w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-8'>
            <h2 className='font-semibold text-4xl'>Some of our past works</h2>
            <p className='text-lg leading-relaxed mt-4 mb-20 text-gray-600'>
              Majority of our projects had a Non-Disclosure Agreement signed by
              both our client and us. In total, we have developed X products in
              the span of X years.
            </p>
          </div>
        </div>

        <div className='container mx-auto py-20'>
          <div className='justify-center flex flex-wrap'>
            <div className='w-full lg:w-12/12 px-4'>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>
                    bubbli.io
                  </h5>
                  <a
                    href='https://bubbli.io/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src='portfolio/bubbliio.png'
                      />
                    </div>
                  </a>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>
                    bubbli.io
                  </h5>
                  <a
                    href='https://bubbli.io/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src='portfolio/bubbliio.png'
                      />
                    </div>
                  </a>
                </div>

                <div className='w-full lg:w-4/12 px-4'>
                  <h5 className='text-xl font-semibold pb-4 text-center'>
                    bubbli.io
                  </h5>
                  <a
                    href='https://bubbli.io/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <div className='hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150'>
                      <img
                        alt='...'
                        className='align-middle border-none max-w-full h-auto rounded-lg'
                        src='portfolio/bubbliio.png'
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
