import React, { useState } from 'react';

function Tour(singleTourProp) {
  const { id, image, info, name, price, removeTour } = singleTourProp;

  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <div className='image-container'>
        <img src={image} alt={name} />
      </div>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 200)}. . .`} {'    '}
          <button
            className='readMore-btn'
            onClick={() => setReadMore((readMore) => !readMore)}
          >
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
