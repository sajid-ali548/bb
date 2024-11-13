import Hero from '../Hero';
import HomeCards from '../HomeCards';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';

import React from 'react'

const HomePage = () => {
  return (
    <>
     <Hero />
     <HomeCards />
     <JobListings isHome={true} />
     <ViewAllJobs />
    </>
  );
};

export default HomePage;
