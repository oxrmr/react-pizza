import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './AppRouter';
import axios from 'axios';

const App = () => {
  console.log(axios.defaults);
  
  return (
    <div className={classNames('app', {}, [])}>
      <AppRouter />
    </div>
  );
};

export default App;
