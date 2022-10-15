import React from 'react'
import {Route, Routes, useParams} from 'react-router-dom'
import HomeContainer from '../components/container/HomeContainer'
import PcComponentsContainer from '../components/container/PcComponentsContainer'
import { ReadComponentContainer } from '../components/container/ReadComponentContainer'
import { UpdateComponent } from '../components/pcComponents/UpdateComponent'

import NewComputerContainer from '../components/container/NewComputerContainer'
import LoginContainer from '../components/container/LoginContainer'

export function RoutesApp () {
    
    
   
    
        return (
                
            <Routes>
                <Route path="/home" element={<HomeContainer />}></Route>

                <Route path='/createComponent' element={<PcComponentsContainer/>}/>

                <Route path="/:component" element= {<ReadComponentContainer/>}/>
                
                <Route path=":component/:id" element={<ReadComponentContainer />}></Route>

                <Route path="/computer" element={<NewComputerContainer />}></Route>
                <Route path="/login" element={<LoginContainer />}></Route>
                
          </Routes>
           
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