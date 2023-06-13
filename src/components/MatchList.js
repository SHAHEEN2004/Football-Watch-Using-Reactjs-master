import React, { useEffect, useState } from 'react';
import api from '../components/api';
import Match from '../components/Match';
import './MatchList.css';
import Navbar from './Navbar';

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const matches = await api.getMatches();
      setMatches(matches);
    };

    fetchMatches();
  }, []);

  return (
    <div className="match-list">
        <Navbar />
      <h1>Football Matches</h1>
      <div className="matches-grid">
        {matches.map(match => (
          <Match key={match.matchviewUrl} match={match} />
        ))}
      </div>
    </div>
  );
};

export default MatchList;
