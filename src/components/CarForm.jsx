import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => ({ name: state.form.name, cost: state.form.cost }));

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const cost = parseFloat(e.target.value);
    dispatch(changeCost(cost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input className='input is-expanded' value={name} onChange={handleNameChange} />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input className='input is-expanded' value={cost || ''} onChange={handleCostChange} type='number' />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
