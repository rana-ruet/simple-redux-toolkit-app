import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTerm = (e) => dispatch(changeSearchTerm(e.target.value));

  return (
    <div className='list-header'>
      <h3 className='title is-3'>My Cars</h3>
      <div className='search field is-horizontal'>
        <label className='label'>Search</label>
        <input type='text' className='input' value={searchTerm} onChange={handleSearchTerm} />
      </div>
    </div>
  );
};

export default CarSearch;
