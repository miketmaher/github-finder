import React, { Fragment } from 'react';
import UserList from '../users/UserList';
import Search from '../users/Search';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <UserList />
    </Fragment>
  );
};

export default Home;
