import { Surveys } from './pages/surveys/Surveys';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <Surveys />

      <ToastContainer position='top-right' />
    </>
  );
};
