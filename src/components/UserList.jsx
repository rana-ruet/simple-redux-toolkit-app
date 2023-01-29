import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';

const UserList = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton times={6} className='h-10 w-full' />
      </div>
    );
  }

  if (error) {
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
        <Button onClick={handleUserAdd}>+ add user</Button>
      </div>
      {renderedUser}
    </div>
  );
};

export default UserList;
