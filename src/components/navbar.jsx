import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faChevronUp, faGlobe } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Products', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Solutions', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Pricing', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Resources', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Blog', href: '#', options: [] },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.classList.add('shadow-md');
      } else {
        navRef.current.classList.remove('shadow-md');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 font-open-sans tracking-wide bg-white sm:bg-gray-100 p-1 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:justify-start">
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto pr-14 sm:pr-0">
            <img src='./images/invgate-logo.png' alt='logo' className='p-1 h-8 w- pl-6 sm:pl-1 sm:mr-7' />
            <div className="flex items-center sm:hidden">
              <FontAwesomeIcon icon={faGlobe} className="text-gray-700 w-5 mr-6 -mb-1 relative h-full" />
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 ml-4 mb-4 relative h-full">
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={faBars} size='lg' className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <FontAwesomeIcon icon={faTimes} size='lg' className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="fixed top-16 left-0 w-full h-full bg-white shadow-md z-50">
              {navigation.map((item, index) => (
                <div key={index}>
                  <button onClick={() => setOpenDropdown(openDropdown === index ? null : index)} className="border-b w-full tracking-wide font-medium border-gray-200 text-gray-600 tracking-tight w-full text-center  py-2.5 hover:bg-gray-200 focus:outline-none">
                    {item.name}
                    {item.options.length > 0 && <FontAwesomeIcon icon={openDropdown === index ? faChevronUp : faChevronDown} className="ml-2" />}
                  </button>
                  {openDropdown === index && item.options.map((option, i) => (
                    <a key={i} href={item.href} className="block border-b border-gray-200 text-center font-medium px-4 text-gray-900 py-2 hover:bg-gray-200">{option}</a>
                  ))}
                </div>
              ))}
              <div className="justify-center align center w-full flex flex-col">
                <a href="https://github.com/Windsheear" className="text-blue-500 sm:text-gray-500 px-3 py-2 rounded-md text-lg text-center font-poppins underline-animation">Contact Us</a>
                <a href="https://github.com/Windsheear" className="bg-blue-500 rounded px-3 py-2 text-lg text-center font-poppins text-white">Subscribe</a>
              </div>
            </div>
          )}

          <div className="hidden sm:flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <div className="relative" key={item.name}>
                  <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className="text-gray-600 px-3 py-2 rounded-md text-md font-poppins flex items-center hover:text-gray-800">
                    {item.name}
                    {item.options.length > 0 && (
                      <div className="relative ml-1 flex items-center">
                        <FontAwesomeIcon icon={faChevronDown} className={`icon-transition ${openDropdown === item.name ? 'hide' : 'show'}`} />
                        <FontAwesomeIcon icon={faChevronUp} className={`icon-transition ${openDropdown === item.name ? 'show' : 'hide'}`} />
                      </div>
                    )}
                  </button>
                  {item.options.length > 0 && (
                    <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dropdown-transition ${openDropdown === item.name ? 'open' : ''}`}
                      style={{ boxShadow: 'none', borderColor: 'transparent' }}>
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.options.map((option) => (
                          <a key={option} href="https://github.com/Windsheear" target='next' className="block px-4 py-2 text-s text-gray-500 hover:bg-gray-300 hover:text-gray-900" role="menuitem">
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Windsheear" className="text-blue-500 px-3 py-2 rounded-md text-lg font-poppins underline-animation">Contact Us</a>
              <a href="https://github.com/Windsheear" className="bg-blue-500 rounded px-3 py-2 text-lg font-poppins text-white">Subscribe</a>
              <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
