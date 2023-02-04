import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { deleteUser } from '../store';
import { useThunk } from '../hooks/useThunk';

const UserListItems = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(deleteUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between cursor-pointer items-center'>
        <div className='flex flex-row items-center justify-between'>
          <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && 'Error deleting user..'}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UserListItems;
