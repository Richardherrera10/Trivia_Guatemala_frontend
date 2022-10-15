import React from 'react'
import styles from './login.css'
export default function Login() {
  return (
    <>
    

<div class="login-block">
    <h1>Login</h1>
    <input type="text"  placeholder="Username" id="username" />
    <input type="password" placeholder="Password" id="password" />
    <button>Submit</button>
</div>
    </>
  )
}
