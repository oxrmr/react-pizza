import ReactDOM from 'react-dom/client';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from 'app/App';

import 'app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
