// import { useState, useRef, useEffect } from "react"
// import { Button, InputGroup, Form, Container, Row, Col } from "react-bootstrap"
// import "bootstrap/dist/css/bootstrap.min.css"

// const ToDoInput = ({addTask, handleEdit}) =>{
//     const [inputTask, setInputTask] = useState('')
//     const inputRef = useRef()
//     useEffect(() =>{
//         inputRef.current.focus()
//     })

//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Col lg={9} md={9} sm={12}>
//                         <InputGroup className="mb-3">
//                         <Form.Control
//                             value={inputTask}
//                             onChange={e => setInputTask(e.target.value)}
//                             ref={inputRef}
//                             handleEdit={handleEdit}
//                         />
//                         </InputGroup>
//                     </Col>

//                     <Col lg={3} md={3} sm={12}>
//                         <Button variant="dark" className="w-100" onClick={() =>{addTask(inputTask)}}>
//                             ADD TASK
//                         </Button>
//                     </Col>

//                 </Row>
//             </Container>         
//         </div>
//     )
// }

// export default ToDoInput

 