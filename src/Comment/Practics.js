// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux/es/exports";
// import { Add, Delete, Edit, Update } from "../Redux/DataReducer";
// import Form from "react-bootstrap/Form";

// const Home = () => {
//   const [data, setdata] = useState({
//     name: "",
//     email: "",
//     last: "",
//     password: "",
//     number: "",
//     id: "",
//   });
//   const dispatch = useDispatch();
//   const Data = useSelector((state) => state.count);
//   const id = Data?.id;

//   const handleSave = (e) => {
//     var Data = data;
//     e.preventDefault();
//     if (id) {
//       dispatch(Update(Data));
//     } else {
//       dispatch(Add(Data));
//     }
//     setdata({
//       name: "",
//       email: "",
//       last: "",
//       password: "",
//       number: "",
//     });
//   };
//   const handleDelete = (id) => {
//     dispatch(Delete(id));
//   };
//   const handleEdit = (id) => {
//     dispatch(Edit(id));
//   };
//   const handleCancel = () => {
//     window.location.reload = "http://localhost:3000/";
//   };
//   useEffect(() => {
//     if (Data?.Isedit) {
//       setdata({
//         ...data,
//         name: Data?.Isedit?.name,
//         last: Data?.Isedit?.last,
//         email: Data?.Isedit?.email,
//         password: Data?.Isedit?.password,
//         number: Data?.Isedit?.number,
//         id: id,
//       });
//     }
//   }, [Data?.Isedit]);
//   return (
//     <div>
//         <center>
//             <div className="formDiv">
//          <Form className="input">
//          <Form.Group className="mb-3" controlId="formGroupEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//       </Form>
//       </div>
//       </center>
//       {/* <form>
//         <input
//           type="text"
//           value={data.name}
//           onChange={(e) => setdata({ ...data, name: e.target.value })}
//         />
//         <br />
//         <input
//           type="text"
//           value={data.last}
//           onChange={(e) => setdata({ ...data, last: e.target.value })}
//         />
//         <br />
//         <input
//           type="text"
//           value={data.email}
//           onChange={(e) => setdata({ ...data, email: e.target.value })}
//         />
//         <br />
//         <input
//           type="text"
//           value={data.password}
//           onChange={(e) => setdata({ ...data, password: e.target.value })}
//         />
//         <br />
//         <input
//           type="text"
//           value={data.number}
//           onChange={(e) => setdata({ ...data, number: e.target.value })}
//         /><br/>
//          {id ? (
//               <span>
//                 <button onClick={(e) => handleSave(e)} type="submit">
//                   Save
//                 </button>
//                 <button onClick={() => handleCancel()} type="reset">
//                   Cancel
//                 </button>
//               </span>
//             ) : (
//               <button onClick={(e) => handleSave(e)} type="submit">
//                 Submit
//               </button>
//             )}
//       </form> */}
//       {/* <div>
//         <table border={2}>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Last</th>
//               <th>Email</th>
//               <th>Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data?.User.map((element, id) => {
//               return (
//                 <tr key={id}>
//                   <td>{id}</td>
//                   <td>{element.name}</td>
//                   <td>{element.last}</td>
//                   <td>{element.email}</td>
//                   <td>{element.number}</td>
//                   <td>
//                     <button onClick={() => handleDelete(id)}>Delete</button>
//                   </td>
//                   <td>
//                     <button onClick={() => handleEdit(id)}>Edit</button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// };

// export default Home;
//reducer
//For profile page reducer
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   User: [],
//   id: "",
//   Isedit: [],
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     Add: (state, action) => {
//       state.User.push(action.payload);
//     },
//     Delete: (state, action) => {
//       state.User.splice(action.payload, 1);
//     },
//     Edit: (state, action) => {
//       state.id = action.payload;
//       state.Isedit = state.User[action.payload];
//     },
//     Update: (state, action) => {
//       state.User[action.payload.id] = action.payload;
//     },
//   },
// });

// export const { Add, Delete, Edit, Update } = counterSlice.actions;

// export default counterSlice.reducer;
