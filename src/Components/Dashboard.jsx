import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
const Dashboard = () => {
    const { 
         authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn} = useAuth()

        const logIn = (e)=>{
            e.preventDefault()
            setIsLoggedIn(true)
            setAuthUser({
                Name: "Sagar adhikari"
            })

        }

        const logOut = (e)=>{
            e.preventDefault()
            setIsLoggedIn(false)
            setAuthUser(null)

        }
  return (
    <>

        <span>User is Currently:{isLoggedIn ? 'Logged-In':'Logged Out'}.</span><br />
        {isLoggedIn ? (<spam>User name :{authUser.Name}</spam>):null}
        <br />
        {isLoggedIn
        ? <button onClick={(e)=>{ logOut(e) }}>Log Out</button>
    :  <button onClick={(e)=>{ logIn(e) }} >Log In</button>}


        
       
    </>
  )
}

export default Dashboard