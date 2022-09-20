
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main';
import Rekvizity from './components/Rekvizity';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/rekvizity' element={<Rekvizity/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;