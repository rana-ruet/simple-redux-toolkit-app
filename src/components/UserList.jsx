import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { useThunk } from '../hooks/useThunk';
import UserListItems from './UserListItems';

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

  let content;
  if (isLoadingUsers) {
    content = (
      <div>
        <Skeleton times={5} className='h-10 w-full' />
      </div>
    );
  } else if (loadingUsersError) {
    content = <div>Error fetching data!!!!</div>;
  } else {
    content = data.map((user) => <UserListItems key={user.id} user={user} />);
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center m-3'>
        <h1 className='m-2 text-xl'>List of Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          Add user
        </Button>
        {createingUserError && 'Error Creating User!'}
      </div>
      {content}
    </div>
  );
};

export default UserList;
