import React from "react";
import LottieFeature from "../components/Lottie/LottieFeature";
import lottie1 from "./Lottie/30826-online-shopping.json";
import lottie2 from "./Lottie/40136-website-security-plgin.json";
import lottie3 from "./Lottie/40220-website-seo-audit.json";

export const Services = () => {
  return (
    <>
      <section className='pb-32 relative block bg-gray-900' id='solutions'>
        <div
          className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
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
              className='text-gray-900 fill-current'
              points='2560 0 2560 100 0 100'></polygon>
          </svg>
        </div>
        <div
          className='container mx-auto lg:pt-24 lg:pb-64 px-12'
          id='solutions'>
          <div className='flex flex-wrap text-center justify-center'>
            <div className='w-full xl:w-8/12 lg:w-8/12 md:w-8/12 px-4'>
              <h2 className='text-4xl font-semibold text-white'>
                Build your million dollar idea with us!
              </h2>
              <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
                We beleive integrity, transparency and open communication are
                integral parts of our service to you and absolutely necessary to
                succeed.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap mt-12 justify-center'>
            <div className='w-full lg:w-4/12 px-4 text-center'>
              <div className='text-gray-900 p-3 w-40 h-40 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                <LottieFeature height={120} width={120} lotti={lottie1} />
              </div>
              <h6 className='text-xl mt-5 font-semibold text-white'>
                eCommerce Development
              </h6>
              <p className='mt-2 mb-4 text-gray-500'>
                We aim to make your brand visible worldwide. Our goal is to
                remove all the technical hurdles you face as small to large
                business owner. We will take care of every detail.
              </p>
            </div>

            <div className='w-full lg:w-4/12 px-4 text-center'>
              <div className='text-gray-900 p-3 w-40 h-40 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                <LottieFeature height={120} width={120} lotti={lottie3} />
              </div>
              <h6 className='text-xl mt-5 font-semibold text-white'>
                Pay-Per-Click Advertising & SEO
              </h6>
              <p className='mt-2 mb-4 text-gray-500'>
                More people to your site for less advertising spend. Growing
                your business organically with genuine connections through
                Search Engine Optimization and targetted advertising using
                Google, Facebook and LinkedIn.
              </p>
            </div>

            <div className='w-full lg:w-4/12 px-4 text-center'>
              <div className='text-gray-900 p-3 w-40 h-40 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
                <LottieFeature height={120} width={120} lotti={lottie2} />
              </div>
              <h6 className='text-xl mt-5 font-semibold text-white'>
                Secure, Scalable solutions
              </h6>
              <p className='mt-2 mb-4 text-gray-500'>
                With an emphasis on speed, efficiency, scalability and security
                we will create a custom solution for you ranging from landing
                pages, sales pages, blogs, marketing sites, multi-user sites and
                everything in-between.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
