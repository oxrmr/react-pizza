import ReactDOM from 'react-dom/client';

import { AppRouter } from 'app/router';
import { StoreProvider } from 'app/store';
import 'app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StoreProvider>
    <AppRouter />
  </StoreProvider>
);
