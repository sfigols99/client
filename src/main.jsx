import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App, Tenants, Landlords, GRMNTs, MyOffers} from './pages/pages';
import './pages/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/client">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/grmnts" element={<GRMNTs />} /> 
        <Route path="/my_offers" element={<MyOffers/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
