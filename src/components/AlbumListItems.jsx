import { TiDelete, TiFolderDelete } from 'react-icons/ti';
import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';

const AlbumListItems = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className='mr-2' onClick={handleRemoveAlbum} loading={results.isLoading}>
        <TiFolderDelete />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumListItems;
