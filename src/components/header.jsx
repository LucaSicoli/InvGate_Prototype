import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = posts && searchValue.trim() ? 
    posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase().trim())) : [];

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className="bg-celeste-200 sm:mt-3 px-8 mx-auto box-shadow shadow-xl w-full mb-10 sm:mb-4 sm:w-[95%] py-10 border-t sm:rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1">
            <p className="text-lg text-blue-600 mb-8">Articles, videos and more</p>
            <h1 className="text-4xl sm:text-5xl tracking-wide let font-roboto font-bold text-gray-700 mb-4">Find the most relevant content in the IT world</h1>
            <div className="flex items-center bg-white shadow-lg p-4 rounded-full w-full sm:w-40%">
              <FontAwesomeIcon icon={faSearch} className="text-blue-400 w-5 h-5 mr-4" />
              <input
                type="text"
                placeholder="I'm looking for..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-grow outline-none placeholder-gray-400 text-gray-800"
              />
              {searchValue && (
                <FontAwesomeIcon 
                  icon={faTimes} 
                  className="text-blue-400 w-3 h-4 mr-6 cursor-pointer transition-opacity duration-200" 
                  onClick={clearSearch}
                  style={{ opacity: searchValue ? 1 : 0 }}
                />
              )}
            </div>
            {filteredPosts.length === 0 && searchValue.trim() !== '' && (
              <p className="text-red-500 mt-2">No results found for "{searchValue}"</p>
            )}
            <p className="text-md text-gray-600 mt-4">We care about your data in our privacy policy</p>
          </div>
          <div className="flex-1 hidden md:block">
            <video src="./images/hero.webm" autoPlay muted loop alt="IT World Illustration" className="max-w-xl mx-auto"/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-900 ease-in-out"
              style={{ opacity: 0, animation: `fadeIn 0.5s ease forwards ${index * 0.1}s` }}
            >
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="text-gray-500 text-xs">
                  <span>{post.author} • </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
