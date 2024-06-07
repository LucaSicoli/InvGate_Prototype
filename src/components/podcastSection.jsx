import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Función para obtener la clase de color basada en la etiqueta
function getColor(tag) {
  const colors = {
    'Leadership': 'bg-yellow-100 text-yellow-800',
    'Management': 'bg-purple-100 text-purple-800',
    'Product': 'bg-pink-100 text-pink-800',
    'Research': 'bg-green-100 text-green-800',
    'Frameworks': 'bg-orange-100 text-orange-800',
    'Design': 'bg-blue-100 text-blue-800'
  };
  return colors[tag] || 'bg-gray-100 text-gray-800'; // Color por defecto
}

function PodcastSection({ episodes }) {
  const [filter, setFilter] = useState('');

  // Función para manejar el clic en un tag
  const handleTagClick = (tag) => {
    setFilter(filter === tag ? '' : tag); // Toggle filter on/off
  };

  // Filtrar episodes basados en el tag seleccionado
  const filteredEpisodes = filter ? episodes.filter(episode => episode.tags.includes(filter)) : episodes;

  return (
    <div className="p-8">
      <header className="ml-5 text-2xl font-bold text-gray-700 mb-6">
        Hear Ticket Volume, our podcast of ITSM world
      </header>
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredEpisodes.map((episode) => (
          <CSSTransition
            key={episode.id}
            timeout={500}
            classNames="item"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div style={{ width: '100%', paddingTop: '65%', position: 'relative' }}>
                <img 
                  src={episode.image} 
                  alt={episode.title} 
                  className="w-full h-full object-cover absolute top-0 left-0" 
                />
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-xs">{episode.date} • {episode.author}</p>
                <h3 className="text-lg font-semibold flex items-center justify-between">
                  {episode.title}
                  <a href={episode.link} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center">
                    <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 hover:text-blue-700 transform -rotate-45 text-lg" />
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mt-1">{episode.description}</p>
                <div className="flex mt-4">
                  {episode.tags.map((tag) => (
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

export default PodcastSection;