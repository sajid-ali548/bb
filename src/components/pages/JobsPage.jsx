import JobListings from '../JobListings';

import React from 'react'
import JobPage from './JobPage';

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      {/* <JobPage /> */}
      <JobListings />
    </section>
  )
}

export default JobsPage
