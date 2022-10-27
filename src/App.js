
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main';
import Rekvizity from './components/Rekvizity';
import SeparatedForm from './components/SeparatedForm';
import NewMain from './components/NewMain';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/rekvizity' element={<Rekvizity/>}></Route>
        <Route path='/enroll' element={<SeparatedForm/>}></Route>
        <Route path='/new' element={<NewMain/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;