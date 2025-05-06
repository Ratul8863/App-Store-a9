import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppCard from './AppCard';
import { Helmet } from 'react-helmet-async';


const Home = () => {

    const data = useLoaderData();
    const trending = [...data].sort((a, b) => b.rating - a.rating).slice(0, 4);


    return (
        <div className="px-4 py-8 space-y-12">
      {/* Slider */}
      {/* <div
        ref={sliderRef}
        className="relative w-full h-64 overflow-hidden rounded-xl mb-10"
        onMouseEnter={() => setIsHovered(true)}  // When mouse enters, pause the slider
        onMouseLeave={() => setIsHovered(false)} // When mouse leaves, resume the slider
      >
        <div
          className="flex transition-transform duration-700 h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 shadow"
        >
          ⬅
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 shadow"
        >
          ➡
        </button>
      </div> */}
      <Helmet>
        <title>App-Store | Home</title>
       </Helmet>

      {/* Trending */}
      <div className='text-center'>
        <h2 className="text-7xl font-bold mb-10">The apps you love. <br />
        From a place you can trust.</h2>
        <div className='text-xl w-10/12 m-auto mb-10 items-center'>
            <p>For over a decade, the App Store has proved to be a safe and trusted place to discover and download apps. But the App Store is more than just a storefront — it’s an innovative destination focused on bringing you amazing experiences. And a big part of those experiences is ensuring that the apps we offer are held to the highest standards for privacy, security, and content. Because we offer nearly two million apps — and we want you to feel good about using every single one of them.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {trending.map(app => <AppCard key={app.id} app={app} />)}
        </div>
        <Link to='/Apps'>  <button className='btn btn-secondary'>View all apps</button> </Link>
       
      </div>
      </div>
    );
};

export default Home;