import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './AppRouter';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <AppRouter />
    </div>
  );
};

export default App;
