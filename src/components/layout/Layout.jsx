import {React, useState, useContext, useEffect} from "react";
import Navbar from "./navbar/Navbar";
import styles from './Layout.css'
import { UserProvider } from "../../UserContext";
import UserContext from "../../UserContext";



export default function Layout({children}) {
  const { loginName } = useContext(UserContext)
  const [load, setLoad] = useState(false)
  // console.log('login name en layout', loginName)
  // console.log('load original es', load)
  useEffect(() => {
  
        // console.log('cambiando')
        setLoad(true)
        // console.log('load ahora es', load)
        
 }, [loginName]);

  return (
    <>
      {setLoad ? (
        <>
          <Navbar />
          <>
            {children}
          </>
      
        </>
            ) : <h1>cargando</h1>
      }        

    </>
    
  )
}
