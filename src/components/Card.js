import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-blue br4 pa2 ma4 dib bw2 shadow-5'>
      <img alt='techfriendss' src={`https://robohash.org/set_set5/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
