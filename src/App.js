import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout , login, selectUser} from "./features/userSlice"
import thunk from "redux-thunk" 
import ProfileScreen from './screens/ProfileScreen';

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
            })
          );
        }else{
          dispatch(logout());
        }
      });
      return unsubscribe();
    },[]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen/>) :
          (
            <Routes>
              <Route path='/profile' 
              element={<ProfileScreen />}>
              </Route>
            <Route path="/" element={<HomeScreen />}>
            </Route>
            </Routes>
          )}
        
      </Router>
    </div>
  );
}

export default App;
