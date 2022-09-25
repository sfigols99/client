import React from 'react'
import ReactDOM from 'react-dom/client'
import PrivateRoutes from './PrivateRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App, OffersPage, GRMNTs, MyProfile, Requests, Rent, Login, Error} from './pages/pages';
import './pages/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/client">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>} />
          <Route path="login" element={<Login/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path="tenants" element={<OffersPage is_tenant={true}/>} /> 
            <Route path="landlords" element={<OffersPage is_tenant={false} />} />
            <Route path="grmnts" element={<GRMNTs />} /> 
            <Route path="my_profile" element={<MyProfile/>} />
            <Route path="requests/:id_offer" element={<Requests/>} />
            <Route path="rents/:id_rent" element={<Rent/>} />
          </Route>
          <Route path="*" element={<Error error="404 NOT FOUND"/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
