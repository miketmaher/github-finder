import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <i className="fab fa-github"></i>{' '}
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repo;
