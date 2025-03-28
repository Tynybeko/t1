import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Delivery from './pages/Delivery.jsx';
import Banner from './components/Banner.jsx';
import MainContent from './components/MainContent.jsx';
import MainImage from './components/MainImage.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Banner />


    
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/delivery' element={<Delivery />} />
    </Routes>


    <div className='contain flex justify-center'>
      <MainContent
        preTitle="footer"
        title="Footer"
        description="At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
            Nunc cras cras aliquet blandit faucibus massa sagittis semper. "
      >
        <div className='flex gap-5 mt-20'>
          <MainImage
            title="Основное меню"
            image="/png/menu.png"
          />
          <MainImage
            title="Барная карта"
            image="/png/menu2.png"
          />
        </div>
      </MainContent>
    </div>

  </BrowserRouter>
)


//SPA (Single Page Application) - Одностраничная приложения