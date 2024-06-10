import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Función para obtener la clase de color basada en la etiqueta
function getColor(tag) {
  const colors = {
    'Design': 'bg-blue-100 text-blue-800',
    'Research': 'bg-green-100 text-green-800',
    'Presentation': 'bg-red-100 text-red-800',
    'Leadership': 'bg-yellow-100 text-yellow-800',
    'Management': 'bg-purple-100 text-purple-800',
    'Product': 'bg-pink-100 text-pink-800',
    'Frameworks': 'bg-orange-100 text-orange-800'
  };
  return colors[tag] || 'bg-gray-100 text-gray-800'; // Color por defecto
}

function RecentBlogPosts({ posts }) {
  const [filter, setFilter] = useState('');

  // Función para manejar el clic en un tag
  const handleTagClick = (tag) => {
    setFilter(filter === tag ? '' : tag); // Toggle filter on/off
  };

  // Filtrar posts basados en el tag seleccionado
  const filteredPosts = filter ? posts.filter(post => post.tags.includes(filter)) : posts;

  return (
    <div className="p-8 -mt-7 sm:mt-6">
      <header className="ml-5 text-2xl font-bold text-gray-700 mb-6">
        Recent blog posts
      </header>
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="item"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-64">
              <div className="md:w-1/2">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <div>
                  <p className="text-gray-500 text-xs">{post.date} • {post.author}</p>
                  <h2 className="text-lg font-semibold flex justify-between items-center">
                    {post.title}
                    <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 hover:text-blue-700 transform -rotate-45" />
                  </h2>
                  <p className="text-gray-600 mt-2">{post.summary}</p>
                </div>
                <div className="flex mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className={`${getColor(tag)} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full cursor-pointer`}
                          onClick={() => handleTagClick(tag)}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default RecentBlogPosts;