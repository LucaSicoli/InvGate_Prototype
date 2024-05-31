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
      imageUrl: "./images/migrating.jpg",  // Asegúrate de tener una imagen real aquí
      author: "Phoenix Baker",
      date: "19 Jan 2022"
    },
    {
      id: 2,
      title: "UX review presentations",
      summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
      imageUrl: "./images/ux.jpg",  // Asegúrate de tener una imagen real aquí
      author: "Olivia Rhye",
      date: "20 Jan 2022"
    }
  ];

  const podcastEpisodes = [
    {
      id: 1,
      title: "Expanding beyond service management",
      description: "Episode 05 with Suresh GP discussing expanding beyond traditional service management roles.",
      tags: ["Leadership", "Management"],
      image: "./images/optimizacion.png",  // Asegúrate de tener una imagen real aquí
      date: "17 Jan 2022"
    },
    {
      id: 2,
      title: "The face of service: Support managers need inspiration too",
      description: "Episode 08 with Megan Engels on the emotional and professional support managers need.",
      tags: ["Product", "Research", "Frameworks"],
      image: "./images/resources.jpg",  // Asegúrate de tener una imagen real aquí
      date: "16 Jan 2022"
    },
    {
      id: 3,
      title: "ESM and the importance of proper communication",
      description: "Episode 07 with Kevin Clark discussing the importance of communication in ESM.",
      tags: ["Design", "Research"],
      image: "./images/comunication.jpg",  // Asegúrate de tener una imagen real aquí
      date: "15 Jan 2022"
    }
  ];

  return (
    <div>
      <Navbar />
      <SearchComponent posts={blogPosts} />
      <main className="p-8 -mt-4">
        <RecentBlogPosts posts={blogPosts} />
        <PodcastSection episodes={podcastEpisodes} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
