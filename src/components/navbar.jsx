import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faChevronUp, faGlobe } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Blue World', href: '#', options: [] },
  { name: 'Products', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Solutions', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Pricing', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Resources', href: '#', options: ['Option 1', 'Option 2', 'Option 3'] },
  { name: 'Blog', href: '#', options: [] },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-white border-blue-500 border-t-1 mt-3 sm:mt-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-500 ml-4 mb-3 relative h-full">
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <FontAwesomeIcon icon={faTimes} className={`absolute transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          </div>
          <div className="flex sm:hidden justify-center w-full items-center">
            <a href="https://github.com/Windsheear" target='next' className="text-blue-500 px-3 py-2 rounded-md text-lg font-poppins">Blue World</a>
          </div>
          <div className="hidden sm:flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <div className="relative" key={item.name}>
                  <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className="text-blue-500 px-3 py-2 rounded-md text-lg font-poppins flex items-center hover:text-blue-800">
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
                          <a key={option} href="https://github.com/Windsheear" target='next' className="block px-4 py-2 text-s text-blue-500 hover:bg-blue-300 hover:text-gray-900" role="menuitem">
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
        <div className={`px-2 pt-2 pb-1 space-y-1 sm:hidden menu-transition ${isOpen ? 'open' : ''}`}>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-blue-800 hover:bg-blue-100">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
