import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { useThunk } from '../hooks/useThunk';

const UserList = () => {
  const [doFetchUser, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, createingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUser();
  }, []);

  const handleUserAdd = () => {
    doCreateUser();
  };

  if (isLoadingUsers) {
    return (
      <div>
        <Skeleton times={6} className='h-10 w-full' />
      </div>
    );
  }

  if (loadingUsersError) {
    return <div>Error fetching data!!!!</div>;
  }

  const renderedUser = data.map((user) => (
    <div key={user.id} className='mb-2 border rounded'>
      <div className='flex p-2 justify-between cursor-pointer items-center'>{user.name}</div>
    </div>
  ));

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>List of Users</h1>
        {isCreatingUser ? 'creating User ...' : <Button onClick={handleUserAdd}>+ add user</Button>}
        {createingUserError && 'Error Creating User!'}
      </div>
      {renderedUser}
    </div>
  );
};

export default UserList;
