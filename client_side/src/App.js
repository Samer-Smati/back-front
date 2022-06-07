import './App.css';
import Login from './components/Auth/Login';
import {Routes,Route, useNavigate} from 'react-router-dom'
import AdminProfile from './components/profiles/adminProfile';
import UserProfile from './components/profiles/userProfile';
import {currentUser} from './redux/action'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  
  
    useEffect(() => {
      dispatch(currentUser(token,navigate));
    }, []);
      
 
  
  return (
    <div className="App">
      {token && <NavBar />}
      <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/Admin' element={<AdminProfile />} />
          <Route path='/User' element={<UserProfile />} />
         
      </Routes>

    </div>
  );
}

export default App;
