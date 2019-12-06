import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

let clientId;
let clientSecret;

if (process.env.NODE_ENV !== 'production') {
  clientId = process.env.REACT_APP_GITHUB_ID;
  clientSecret = process.env.REACT_APP_GITHUB_SECRET;
} else {
  clientId = process.env.GITHUB_ID;
  clientSecret = process.env.GITHUB_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${clientId}&client_secret=${clientSecret}`,
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`,
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  const getRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`,
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
