
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/template' element='test template'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;