import React from 'react';
import './Match.css';

const Match = ({ match }) => {
  return (
    <div className="card">

      <h2 className='h2m' >{match.title}</h2>
      <p className='h2m'>{match.competition}</p>
      <img src={match.thumbnail} alt={match.title} />
      <a href={match.matchviewUrl} className="watch-button">Watch Now</a>
    </div>
  );
};

export default Match;
