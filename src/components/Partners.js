import React from "react";
import LottieFeature from "./Lottie/LottieFeature";

export const Partners = () => {
  return (
    <>
      <div className='bg-gray-300'>
        <div className='container mx-auto'>
          <section className='pt-20 pb-32'>
            <div className='container mx-auto' id='about'>
              <div className='flex flex-wrap justify-center text-center mb-24'>
                <div className='w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-6'>
                  <h2 className='text-4xl font-semibold'>Our Partners</h2>
                  <p className='text-lg leading-relaxed m-4 text-gray-600'>
                    We are privileged to be trusted by our partners to motivate
                    us deliver excellence
                  </p>
                </div>
              </div>
              <div className='flex flex-wrap justify-center items-center mx-auto p-8'>
                <div className='w-full md:w-6/12 lg:w-4/12 sm:w-1/2 lg:mb-0 mb-12 px-6 mt-12'>
                  <div>
                    <LottieFeature height={110} width={100} />
                  </div>
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Name</h5>
                  </div>
                </div>

                <div className='w-full md:w-6/12 lg:w-4/12 sm:w-1/2 lg:mb-0 mb-12 px-6 mt-12'>
                  <div>
                    <LottieFeature height={110} width={100} />
                  </div>
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Name</h5>
                  </div>
                </div>

                <div className='w-full md:w-6/12 lg:w-4/12 sm:w-1/2 lg:mb-0 mb-12 px-6 mt-12'>
                  <div>
                    <LottieFeature height={110} width={100} />
                  </div>
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Name</h5>
                  </div>
                </div>

                <div className='w-full md:w-6/12 lg:w-4/12 sm:w-1/2 lg:mb-0 mb-12 px-6 mt-12'>
                  <div>
                    <LottieFeature height={110} width={100} />
                  </div>
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Name</h5>
                  </div>
                </div>

                <div className='w-full md:w-6/12 lg:w-4/12 sm:w-1/2 lg:mb-0 mb-12 px-6 mt-12'>
                  <div>
                    <LottieFeature height={110} width={100} />
                  </div>
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Name</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
