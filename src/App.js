
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Rekvizity from './components/Rekvizity';
import NewMain from './components/NewMain';
import BcForm from './components/BcForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewMain/>}></Route>
        <Route path='/rekvizity' element={<Rekvizity/>}></Route>
        <Route path='/bc-enroll' element={<BcForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
