"use client"

import { useState } from "react"

const Login = () => {
  const [user,setUser] = useState({userName:"",password:""});  
  return (
    <form>
        <input type="text" value={user.userName} placeholder="User Name" />
        <input type="password" value={user.password} placeholder="Password" />
        <input type="submit" value="Login" />
    </form>
  )
}

export default Login