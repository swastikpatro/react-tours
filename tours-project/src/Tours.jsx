import React from 'react';
import Tour from './Tour';

const Tours = (tourProps) => {
  const { tours, removeTour } = tourProps;
  console.log(tours);
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>

      <div className='tours-container'>
        {tours.map((singleTour) => (
          <Tour key={singleTour.id} {...singleTour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
