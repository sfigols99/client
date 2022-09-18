import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App, OffersPage, GRMNTs, MyOffers, Requests} from './pages/pages';
import './pages/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/client">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tenants" element={<OffersPage is_tenant={true} />} />
        <Route path="/landlords" element={<OffersPage is_tenant={false} />} />
        <Route path="/grmnts" element={<GRMNTs />} /> 
        <Route path="/my_offers" element={<MyOffers/>} />
        <Route path="/requests" element={<Requests/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
