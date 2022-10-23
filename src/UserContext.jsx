import { createContext, useState, useEffect } from "react";

import axios from "./service/api";
const UserContext = createContext()
const LOGIN_URL = '/login'
const RESPONSE_URL = '/trivia/response'
export function UserProvider({children}){

    const [loginName, setLoginName] = useState('')
    const [isReady, setIsReady] = useState(false)
    const [token, setToken] = useState('')
    const [data, setData] = useState({})
    const [level, setLevel] = useState('')
    const apiResponse = async (email, pwd, pwdConfirm)=> {
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({email, password: pwd, password_confirmation: pwdConfirm}), 
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: false
            }
            
        )
        
        
        // console.log('info es', response.data)
        

        setLoginName(response.data.user_name)
        setToken(response.data.token)
        // console.log('luego de api', loginName)

        const responseInfo = await axios.post(RESPONSE_URL,
            JSON.stringify({isCorrect: 0}), 
            { headers : {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${response.data.token}`} 
            }
            
        )
        // console.log('info de preguntas  y nivel', responseInfo.data)
        
        if( responseInfo.data.question === null) {
            responseInfo.data.question = 0
        }
       
        setData(responseInfo.data)

        
    }
    const addLevel = (newLevel)=> {
        setLevel(newLevel)
    }
    useEffect(() => {
        
        
        // console.log('nombre es',loginName )
        setIsReady(true)

     }, [apiResponse]);
    
    return (
        <>
{setIsReady ? <UserContext.Provider value={{loginName, token, data, apiResponse, addLevel}}>{children}</UserContext.Provider> : <UserContext.Provider value={{loginName, token, data, apiResponse, addLevel}}>{children}</UserContext.Provider>}        
            

            </>
    )
}


export default UserContext