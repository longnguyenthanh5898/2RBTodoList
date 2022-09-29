// import {Container, Row, Col} from "react-bootstrap"
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";

// const ToDo = ({list, handleEdit, handleDelete}) =>{
    
//     return (
//         <Container >
//             <Row>
//                 <Col lg={10} md={10} sm={10} className="p-2 px-3 pt-2 mb-2 bg-secondary text-white fw-bold">
//                     <div  key={list.id} onClick={(e) =>handleComplete(e.target.id)} className={list.complete ? "complete" : ""} >
//                         {list.task}
//                     </div>
//                 </Col>

//                 <Col lg={1} md={1} sm={1} className="p-2 px-3 mb-2">
                   
//                         <AiFillEdit  id={list.id} key={list.id} className="edit-icon" onClick={(e) =>{handleEdit()}} keyValue={list.edit ? "edit" : ""}/>
                         
//                 </Col>

//                 <Col lg={1} md={1} sm={1} className="p-2 px-3 mb-2">
                   
//                         <AiFillDelete id={list.id} key={list.id} className="delete-icon" onClick={(e) =>{
                           
//                             handleDelete()
//                             }}/>
                          
//                 </Col>

                
                
//             </Row>
//         </Container>
        
        
//     )
// }
// export default ToDo