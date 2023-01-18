import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
    const filteredCar = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      cars: filteredCar,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderCar = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className='is-danger button' onClick={() => handleCarDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className='car-list'>
      {renderCar}
      <hr />
    </div>
  );
};

export default CarList;
