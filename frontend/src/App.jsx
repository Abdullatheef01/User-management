import { useEffect,useState } from "react"
import {createUser,getUser} from '../services/userService'
import Form from '../src/components/Form'
import UserData from '../src/components/UserData'
import './style.css'
function App() {

  return (
    <>
     <Form/>
    <UserData/>
    </>
  )
}

export default App
