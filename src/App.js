import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import SearchComponent from './components/searchbarcard.jsx';
import RecentBlogPosts from './components/recentBlogPosts.jsx';
import PodcastSection from './components/podcastSection.jsx';
import './output.css';
import Footer from './components/footerfin.jsx';

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Migrating to Linear 101",
      summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      tags: ["Design", "Research"],
      imageUrl: "./images/post-1.png",  // Asegúrate de tener una imagen real aquí
      author: "Phoenix Baker",
      date: "19 Jan 2022"
    },
    {
      id: 2,
      title: "UX review presentations",
      summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
      imageUrl: "./images/post-2.png",  // Asegúrate de tener una imagen real aquí
      author: "Olivia Rhye",
      date: "20 Jan 2022"
    },
    {
      id: 3,
      title: "Building your API Stack",
      summary: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..",
      tags: ["Design", "Research"],
      imageUrl: "./images/post-3.png",  // Asegúrate de tener una imagen real aquí
      author: "Lana Steiner",
      date: "18 Jan 2022"
    }
  ];

  const podcastEpisodes = [
    {
      id: 1,
      title: "Bill Wall Leadership Lessons",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?.",
      tags: ["Leadership", "Management"],
      image: "./images/card-1.jpeg",  // Asegúrate de tener una imagen real aquí
      date: "17 Jan 2022"
    },
    {
      id: 2,
      title: "PM mental models",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Frameworks"],
      image: "./images/card-2.jpeg",  // Asegúrate de tener una imagen real aquí
      date: "16 Jan 2022"
    },
    {
      id: 3,
      title: "What is Wireframing?",
      description: "introduction to Wireframing and its principles. learn from the best in the insdustry",
      tags: ["Design", "Research"],
      image: "./images/card-3.jpeg",  // Asegúrate de tener una imagen real aquí
      date: "15 Jan 2022"
    }
  ];

  return (
    <div>
      <Navbar />
      <main className="p-8 sm:p-13 mt-7 sm:mt-10">
        <SearchComponent posts={blogPosts} />
        <RecentBlogPosts posts={blogPosts} />
        <PodcastSection episodes={podcastEpisodes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
