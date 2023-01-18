import CarForm from './CarForm';
import CarList from './CarList';
import CarSearch from './CarSearch';
import CarValue from './CarValue';

const App = () => {
  return (
    <div className='container is-fluid'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
