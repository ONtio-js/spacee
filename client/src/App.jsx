import './App.css';
import {Routes, Route} from "react-router-dom";
import IndexPage from './pages/indexPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import Layout from './layout';
import RegisterPage from './pages/registerPage';
import axios from 'axios';
import {UserContextProvider}  from './context/userContext';
// import AccountPage from './pages/accountPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/placesPage';
import BookingsPage from './pages/BookingsPage';
import FormPage from './pages/FormPage';
import PlacePage from './pages/PlacePage';
import BookingPage from './pages/BookingPage';
import VerificationPage from './pages/VerificationPage';

axios.defaults.baseURL = 'http://localhost:8080/api/v1';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/register" element={< RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path= "/account/" element = {<ProfilePage />} />
        <Route path ='/account/places' element = {< PlacesPage />} />
        <Route path ='/account/places/new' element = {< FormPage />} />
       <Route path= "/account/bookings" element = {< BookingsPage />} />
       <Route path ='/account/places/:id' element = {< FormPage />} />
       <Route path ='/places/:id' element = {< PlacePage />} />
       <Route path='/account/bookings/:id' element = {< BookingPage />} />
      <Route path='/verification' element = {< VerificationPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App
