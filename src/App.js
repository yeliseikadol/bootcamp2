
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Rekvizity from './components/Rekvizity';
import SeparatedForm from './components/SeparatedForm';
import NewMain from './components/NewMain';
import { ExternalLink } from 'react-external-link';
import Section from './components/Section';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/rekvizity' element={<Rekvizity/>}></Route>
        <Route path='/enroll' element={<SeparatedForm/>}></Route>
        <Route path='/new' element={<NewMain/>}></Route>
        <Route
          path='/payment30'
          element={<Section><h1>Итого</h1>
          <div>Общая стоимость: 2160 BYN</div>
          <div>−30% за запись до 30 октября</div>
          <div>К оплате: 504 BYN</div>
            <ExternalLink className='button button-big' href="https://epos.hutkigrosh.by/pay/pay?param=19190-1-30#00020101021132450010by.raschet01074440631101019190-1-3012021133320014by.epos.unipay031019190%3B1%3B30520489995802BY5911IPKadolE.N.6005Minsk5406504.0053039336304F005"
          ><span>Оплатить</span></ExternalLink>
          </Section>}>
          </Route>

          <Route
          path='/payment30-3'
          element={<Section><h1>Итого ваш заказ</h1>
          <div>Общая стоимость: 2160 BYN</div>
          <div>−30% за запись до 30 октября</div>
          <div>−10%, если проходили другие курсы</div>
          <div>Итого к оплате: 432 BYN</div>
            <ExternalLink className='button button-big' href="https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-3#00020101021132470010by.raschet01074440631101219190-1-30-312021133340014by.epos.unipay031219190%3B1%3B30-3520489995802BY5911IPKadolE.N.6005Minsk5406432.0053039336304DA30"
          ><span>Оплатить</span></ExternalLink>
          </Section>}>
          </Route>

          <Route
          path='/payment30-4'
          element={<Section><h1>Итого ваш заказ</h1>
          <div>Общая стоимость: 2160 BYN</div>
          <div>−30% за запись до 30 октября</div>
          <div>−10% по сертификату</div>
          <div>Итого к оплате: 432 BYN</div>
            <ExternalLink className='button button-big' href="https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-4#00020101021132470010by.raschet01074440631101219190-1-30-412021133340014by.epos.unipay031219190%3B1%3B30-4520489995802BY5911IPKadolE.N.6005Minsk5406432.00530393363041E49"
          ><span>Оплатить</span></ExternalLink>
          </Section>}>
          </Route>

          <Route
          path='/payment30-3-4'
          element={<Section><h1>Итого ваш заказ</h1>
          <div>Общая стоимость: 2160 BYN</div>
          <div>−30% за запись до 30 октября</div>
          <div>−10% по сертификату</div>
          <div>−10%, если проходили другие курсы</div>
          <div>Итого к оплате: 360 BYN</div>
            <ExternalLink className='button button-big' href="https://epos.hutkigrosh.by/pay/pay?param=19190-1-30-3-4#00020101021132490010by.raschet01074440631101419190-1-30-3-412021133360014by.epos.unipay031419190%3B1%3B30-3-4520489995802BY5911IPKadolE.N.6005Minsk5406360.00530393363043B07"
          ><span>Оплатить</span></ExternalLink>
          </Section>}>
          </Route>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
