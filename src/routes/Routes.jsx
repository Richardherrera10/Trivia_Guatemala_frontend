import React from 'react'
import {Route, Routes, useParams} from 'react-router-dom'
import HomeContainer from '../components/container/HomeContainer'

import LoginContainer from '../components/container/LoginContainer'
import TriviaContainer from '../components/container/TriviaContainer'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import { UserProvider } from '../UserContext'
export function RoutesApp () {
    
    
   
    
        return (
            <UserProvider>
            <Routes>

                <Route path="/dashboard" element={<HomeContainer />}></Route>

                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/trivia" element={<TriviaContainer />}></Route>
                
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