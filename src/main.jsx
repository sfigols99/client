import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {App, Tenants, Landlords, GRMNTs} from './pages';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/grmnt">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/grmnts" element={<GRMNTs />} /> 
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
