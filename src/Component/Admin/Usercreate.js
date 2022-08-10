/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { Usercreate,Userupdate } from '../../Redux/Reducer/CreateSlice';
const user_id=localStorage.getItem("user_id")

const UserCreate = () => {
  const navigate=useNavigate();
  const Show = useSelector((state) => state.list?.usershow?.post);
  const Update=useSelector((state)=>state.User?.updateData)
  console.log("FF",Update)
  const {id} =useParams()
    const [state, setstate] = useState({
        title:'',
        description:''
    })
    const dispatch = useDispatch()
    const create=(e)=>{
        e.preventDefault();
        state["user_id"]=user_id
        if(id){
          dispatch(Userupdate({post:state}))
        }
        else{
          dispatch(Usercreate({post:state}))
        }
        navigate("/userlist");
        setstate({
          ...state,
          title:'',
          description:''
        })}
  const Cancel=()=>{
    window.location.href="http://localhost:3000"
  }
  const handleShow=()=>{
    navigate("/userlist");
  }
  const handleLogout=()=>{
    localStorage.removeItem("Token")
    localStorage.removeItem("user_id")
    window.location.href="/"
  }
  useEffect(() => {
    const item=Show
    if(item){
      setstate({
        title:item.title,
        description:item.description,
        id:id
      })
    }
    
  }, [Show])

  return (
    <div>
      <span>
      <button onClick={()=>handleShow()}>Show list</button>
      <button onClick={()=>handleLogout()}>Log_Out</button>
      </span>
         <br/>
        <form>
            <input type="text" value={state.title}  onChange={(e)=>setstate({...state,title:e.target.value})}/><br/>
            <input type="text" value={state.description}  onChange={(e)=>setstate({...state,description:e.target.value})}/><br/>
            {
              id ?
              <span>
                 <button type='submit' onClick={(e)=>create(e)}>Update</button>
                 <button type='submit' onClick={(e)=>Cancel(e)}>cancel</button>
              </span>
              :
              <button type='submit' onClick={(e)=>create(e)}>Create</button>
            }
           
        </form>
        
    </div>
  )
}

export default UserCreate;
