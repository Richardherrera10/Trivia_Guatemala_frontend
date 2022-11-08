import React from 'react'
import {Route, Routes, useParams} from 'react-router-dom'
import HomeContainer from '../components/container/HomeContainer'
import LoginContainer from '../components/container/LoginContainer'
import TriviaContainer from '../components/container/TriviaContainer'
import ProfileContainer from '../components/container/ProfileContainer'
import AdminContainer from '../components/container/AdminContainer'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Profile from '../components/profile/profile'
import { UserProvider } from '../UserContext'
export function RoutesApp () {
    
    
   
    
        return (
            <UserProvider>
                <Routes>
                    <Route path="/" element={<HomeContainer />} ></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/trivia" element={<TriviaContainer />}></Route>
                    <Route path="/profile" element={<ProfileContainer />}></Route>
                    <Route path="/admin" element={<AdminContainer />}></Route>
                </Routes>
            </UserProvider>
        )

}

export default RoutesApp


{/* <Routes>
                    <Route path='/' element={<HomeContainer/>}/>
                    <Route path='/components/create' element={<PcComponentsContainer/>}/>
                    
                    <Routes path='/components' element={<ListPcComponentsContainer/>}/>
                         <Route path='/components/:component' element={<UpdateComponent/>}/>
                    </Routes>
                   
                </Routes> */}