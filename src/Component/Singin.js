import React,{useState} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { singIn } from '../Redux/Reducer/SinginSlice';
import {Link} from "react-router-dom"

const SingIn = () => {
  const [state, setstate] = useState({
    email:'',
    password:''
  })
 const dispatch=useDispatch();
  const handleLogin=(e)=>{
    e.preventDefault();
    dispatch(singIn({user:state}))


  }

  return (
    <div>
      <form>
        <input type="text" value={state.email} onChange={(e)=>setstate({...state,email:e.target.value})}/><br></br>
        <input type="text" value={state.password} onChange={(e)=>setstate({...state,password:e.target.value})}/><br></br>
        <button type='submit' onClick={(e)=>handleLogin(e)}>login</button>
        <p> <Link to="/singup">Already have an account? Sign in</Link></p>

      </form>
    </div>
  )
}

export default SingIn