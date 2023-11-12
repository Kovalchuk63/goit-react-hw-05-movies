import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const posterBasePath = 'https://image.tmdb.org/t/p/w500';

const ulStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '15px',
};

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <ul style={ulStyle}>
        {moviesList.map(({ title, id, poster_path }) => (
          <li style={{ maxWidth: 200 }} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
            <img
              src={poster_path ? `${posterBasePath}${poster_path}` : defaultImg}
              alt={title}
              width="200"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
