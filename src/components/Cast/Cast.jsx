import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActorsList from '../ActorList/ActorList';
import moviesAPI from '../../components/serviceAPI/serviceAPI';

const movieAPI = new moviesAPI();

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    movieAPI.getActors(movieId).then(actors => {
      if (actors.length === 0) {
        return;
      }
      setActors(actors);
    });
  }, [movieId]);

  return (
    <>
        {actors.length > 0 ? (<ActorsList actors={actors} />)
          : (<div>No actors found for this movie.</div>)}
    </>
  );
};

export default Cast;
