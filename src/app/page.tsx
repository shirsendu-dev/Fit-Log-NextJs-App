
import React from 'react';
import Hero from '../components/home/Hero';
import WorkoutLibrary from '../components/home/WorkoutLibrary';

const HomePage = () => {
  return (
    <section className='py-15'>
      <div>
        <Hero></Hero>
        <WorkoutLibrary></WorkoutLibrary>
      </div>
    </section>
  );
};

export default HomePage;