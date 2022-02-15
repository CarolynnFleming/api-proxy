import React from 'react';

export default function BusinessList({ yelp }) {
  return (
    <div>{yelp.map((business, i) => <div className='yelp-item' key={business.name + i}>
      <p>{business.name}</p>
      <img src={business.image_url} />
    </div>)}
    </div>
  );
}