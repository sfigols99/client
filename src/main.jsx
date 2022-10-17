import React from 'react'
import ReactDOM from 'react-dom/client'
import PrivateRoutes from './PrivateRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App, OffersPage, MyProfile, Requests, Rent, Login, Error, AddOffer, User} from './pages/pages';
import './pages/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/client">
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App/>} />
          <Route path="login/:address" element={<Login/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path="offers" element={<OffersPage/>} /> 
            <Route path="my_profile" element={<MyProfile/>} />
            <Route path="requests/:id_offer" element={<Requests/>} />
            <Route path="rents/:id_rent" element={<Rent/>} />
            <Route path="add_offer" element={<AddOffer/>} />
            <Route path="user" element={<User/>} />
          </Route>
          <Route path="*" element={<Error error="404 NOT FOUND"/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
