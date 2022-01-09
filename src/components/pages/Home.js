import React, { Fragment } from 'react';
import Users from '../users/Users';
import Search from '../users/Search';
import PropTypes from 'prop-types';

const Home = ({ users, loading, searchUsers, clearUsers, setAlert }) => {
  return (
    <Fragment>
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={users.length ? true : false}
        setAlert={setAlert}
      />
      <Users loading={loading} users={users} />
    </Fragment>
  );
};

Home.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Home;
