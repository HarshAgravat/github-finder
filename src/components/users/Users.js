import React, { useContext } from 'react';
import { Spinner } from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  return (
    <div style={userStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user) => <UserItem user={user} key={user.id} />)
      )}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
