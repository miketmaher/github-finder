import React, { useContext } from 'react';
import UserCard from './UserCard';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const gitHubContext = useContext(GithubContext);
  const { loading, users } = gitHubContext;
  if (!loading) {
    return (
      <div style={styles.grid}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
  return <Spinner />;
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
  },
};

export default Users;
