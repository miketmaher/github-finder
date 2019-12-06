import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const RepoList = ({ repos }) => {
  return repos.map(repo => <Repo key={repo.key} repo={repo} />);
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
