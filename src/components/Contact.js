import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export const Contact = () => {
  return (
    <>
      <section className='static block py-20 lg:pt-0 bg-gray-900'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
            <div className='w-full lg:w-8/12 px-4'>
              <div className='relative flex flex-auto min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 px-4 py-8'>
                <div className='flex-auto py-5 lg:p-10'>
                  <h4 className='text-4xl font-bold text-center'>
                    Want to work with us?
                  </h4>
                  <p className='leading-relaxed mt-2 mb-4 text-gray-600 text-center text-lg'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <form
                    className='input-form'
                    name='contact'
                    id='contact'
                    required
                    // onSubmit={sendData}
                  >
                    <div className='relative w-full mb-3 mt-8'>
                      <label
                        className='block uppercase text-gray-700 text-xs font-bold mb-2'
                        htmlFor='first-name'>
                        Name
                      </label>
                      <input
                        type='text'
                        className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                        placeholder='Your Name'
                        name='name'
                        // onChange={handleInput}
                        required
                      />
                    </div>
                    <div className='relative w-full mb-3 mt-8'>
                      <label
                        className='block uppercase text-gray-700 text-xs font-bold mb-2'
                        htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                        placeholder='name@company.com'
                        name='email'
                        // onChange={handleInput}
                        required
                      />
                    </div>
                    <div className='relative w-full mb-3 mt-8'>
                      <label
                        className='block uppercase text-gray-700 text-xs font-bold mb-2'
                        htmlFor='message'>
                        Message
                      </label>
                      <textarea
                        className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150'
                        rows='3'
                        placeholder='Your message'
                        name='message'
                        // onChange={handleInput}
                        required
                      />
                    </div>
                    <HCaptcha
                      className='h-captcha'
                      sitekey='fca6049c-deb7-4d85-a571-d6eb986528d6'></HCaptcha>
                    <div className='relative w-full mb-3 mt-8'>
                      <input
                        className='bg-green-500 text-gray-900 hover:bg-green-700 text-lg font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg hover::bg-green-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        name='submit'
                        type='submit'
                        value='Send Inquiry Now'
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
