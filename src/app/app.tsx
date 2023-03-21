// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { appRoutes } from '@website/routes';
import { RouterProvider } from 'react-router';

export function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
