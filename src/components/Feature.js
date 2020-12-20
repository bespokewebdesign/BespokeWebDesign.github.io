import React from "react";
import LottieFeature from "../components/Lottie/LottieFeature";
import lottie1 from "./Lottie/18033-box-open.json";
import lottie2 from "./Lottie/29399-growth.json";
import lottie3 from "./Lottie/23621-ux-analytic-animation.json";

export const Feature = () => {
  return (
    <div className='pb-12 bg-gray-300'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap' id='features'>
          <div className='w-full md:w-4/12 px-4 text-center pt-10'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full'>
                  <LottieFeature height={100} width={120} lotti={lottie1} />
                </div>
                <h6 className='text-xl font-semibold'>Made to order</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  We don't do out-of-the-box solutions, we design intelligent,
                  cost-effective and intuitive web and mobile applications.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-4/12 px-4 text-center pt-10'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full'>
                  <LottieFeature height={100} width={120} lotti={lottie2} />
                </div>
                <h6 className='text-xl font-semibold'>Improvements & Growth</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Affordable monthly retainers allow us to maintain and improve
                  your system without interuption or loss of business.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-4/12 px-4 text-center pt-10'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white text-center inline-flex items-center justify-center w-40 h-40 mb-5 shadow-2xl rounded-full'>
                  <LottieFeature height={100} width={120} lotti={lottie3} />
                </div>
                <h6 className='text-xl font-semibold'>Design & Develop</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Our dedicated UX developers will elevate your buisness with
                  our professional logo and business branding service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
