import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-4 py-3 navbar-expand-lg'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className='text-white text-2xl mr-4 font-bold leading-relaxed inline-block py-2 whitespace-no-wrap uppercase'
              to='/'>
              <Logo />
            </Link>
            <button
              type='button'
              className={`cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none ${
                navbarOpen ? "opened" : ""
              }`}
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <svg width='40px' height='40px' viewBox='0 0 100 100'>
                <path
                  className='line line1'
                  d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
                />
                <path className='line line2' d='M 20,50 H 80' />
                <path
                  className='line line3'
                  d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id='example-navbar-warning'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#about'>
                  About
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#solutions'>
                  Solutions
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='#contact'>
                  Contact
                </a>
              </li>
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://www.linkedin.com/in/harris-fauntleroy-b4b5b51b1/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>LinkedIn</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://github.com/BespokeWebDesign'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='lg:text-gray-300 text-gray-500 fab fa-github-alt text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Github</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='https://twitter.com/bespokewebdesi2'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg ' />
                  <span className='lg:hidden inline-block ml-2'>Twitter</span>
                </a>
              </li>

              <li className='flex items-center'>
                <form target='_blank' rel='noopener noreferrer'>
                  <button
                    className='bg-green-500 text-gray-900 hover:bg-green-700 text-sm font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                    type='submit'
                    formAction=''>
                    <i className='fas fa-phone-volume -pl-1 mr-1 px'></i> Book a
                    Call
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
