import './App.css'

import UncontrolledForm from '../UncontrolledForm';
import ControlledForm from '../ControlledForm';
import UseEffectUsers from '../useEffectUsers';

const App = () => {
  return (
    <>
      <div className='container'>
        <ControlledForm />
        <UncontrolledForm />
      </div>
      <div className="container">
        <UseEffectUsers />
      </div>
    </>
  );
};

export default App
