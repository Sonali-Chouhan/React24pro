import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { singUp } from '../Redux/Reducer/SingupSlice';
import { Link } from 'react-router-dom';

const SingUp = () => {
const [state, setstate] = useState({
    email:'',
    password:'',
    password_confirmation:''
})
const dispatch = useDispatch();
const Register=(e)=>{
    const data=state
    console.log("FF",data)
    e.preventDefault()
     dispatch(singUp({user:data}))
}
return (
    <div>
        <form>
            <input type="text" value={state.email} onChange={(e)=>setstate({...state,email:e.target.value})}/><br/>
            <input type="text" value={state.password} onChange={(e)=>setstate({...state,password:e.target.value})}/><br/>
            <input type="text" value={state.password_confirmation} onChange={(e)=>setstate({...state,password_confirmation:e.target.value})}/><br/>
            <button onClick={(e)=>Register(e)}>Save</button><br/>
            <p> <Link to="/">Already have an account? Sign in</Link></p>
        </form>
    </div>
  )
}

export default SingUp