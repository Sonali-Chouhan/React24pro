import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import { Userlist,Userdelete,Usershow } from "../../Redux/Reducer/UserlistSlice";
import { useDispatch } from "react-redux/es/exports";
import { Button } from "react-bootstrap";
const UserList = () => {
  const navigate=useNavigate();
  const state = useSelector((state) => state.list?.userlist);
  const mess=useSelector((state)=>state.list?.userdelete?.message)
  const dispatch = useDispatch();
  const Delete=(id)=>{
    dispatch(Userdelete(id))
   
  }
  const Edit=(id)=>{
    navigate(`/usercreate/${id}`);
    dispatch(Usershow(id))

  }
 const handlecreate=()=>{
  navigate("/usercreate")
 }
  useEffect(() => {
    if(mess){
      dispatch(Userlist());
    }
    dispatch(Userlist());
  }, [mess]);
  return (
    <div>
      <Button onClick={()=>handlecreate()}>Create</Button>
      <center>
        <Table variant="dark" style={{ width: "70%", marginTop: "33px",color:"white" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created_at</th>
              <th>Updated_at</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {state?.posts?.map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td>{element.description}</td>
                  <td>{element.created_at}</td>
                  <td>{element.updated_at}</td>
                  <td><Button variant="warning" onClick={()=>Delete(element.id)}>delete</Button></td>
                  <td><Button variant="info" onClick={()=>Edit(element.id)}>Show</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </center>
    </div>
  );
};

export default UserList;
