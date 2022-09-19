import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App, OffersPage, GRMNTs, MyProfile, Requests, Rent} from './pages/pages';
import './pages/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/client">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="tenants" element={<OffersPage is_tenant={true} />} />
          <Route path="landlords" element={<OffersPage is_tenant={false} />} />
          <Route path="grmnts" element={<GRMNTs />} /> 
          <Route path="my_profile" element={<MyProfile/>} />
          <Route path="requests/:id_offer" element={<Requests/>} />
          <Route path="grmnts/rents/:id_rent" element={<Rent/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
