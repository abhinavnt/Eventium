import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserRoute from './routes/UserRoute'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { refreshToken } from './services/authService';
import { useAppSelector } from './redux/store';
import Loading from './components/ui/Loading';

function App() {

const [loading, setLoading] = useState<boolean>(true);
const dispatch = useDispatch();
const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

   useEffect(() => {
    const fetchUser = async () => {
      
      // const urlParams = new URLSearchParams(window.location.search);
      // const authStatus = urlParams.get('auth');

      // if (authStatus === 'success') {
      //   localStorage.setItem("isAuthenticated", "true");
      //   window.history.replaceState({}, document.title, window.location.pathname);
      // }

      const storedAuth = localStorage.getItem("isAuthenticated");
      if (storedAuth) {
        try {
          await refreshToken(dispatch);
        } catch (error) {
          console.error("Error during token refresh", error);
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      } else {
        setLoading(false);
      }
    };
    fetchUser();
  }, [dispatch, isAuthenticated]);


 if (loading) {
  return (
    <div className="flex bg-black items-center justify-center h-screen">
      <Loading variant="ripple"  />
    </div>
  );
}

  return (
   <BrowserRouter>
   <Routes>
     <Route path='/*' element={<UserRoute/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
