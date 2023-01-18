import { useSelector } from 'react-redux';
const CarValue = () => {
  const totalCost = useSelector(({ cars: { searchTerm, data } }) =>
    data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  ).reduce((acc, car) => acc + car.cost, 0);

  return <div className='car-value'>Total - ${totalCost}</div>;
};

export default CarValue;
