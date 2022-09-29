
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from 'uuid';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState, useRef, useEffect } from "react"
import { Button, InputGroup, Form, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () =>{
 

  //get data LS
  const getDataFromLS = () =>{
    return localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []
  }
  //handleDelete
  const handleDelete = (id) =>{
    let data = getDataFromLS()
    data.splice(id, 1)
    localStorage.setItem('lists', JSON.stringify(data))
    setLists(data)
  }
  // addTask
  const addTask = (task) =>{
    let data = getDataFromLS()
    data = [...data, {id: uuidv4(), task: task, edit: false}]
    localStorage.setItem('lists', JSON.stringify(data))
    setLists(data)   
  }
  



  const [lists, setLists] = useState(getDataFromLS())

  const [inputTask, setInputTask] = useState('')


  const inputRef = useRef()
  // useEffect(() =>{
  //     inputRef.current.focus()
  // })


  // edit form
  const [editForm, setEditForm]=useState(false);
  
  // handleEdit
  const handleEdit = (id) =>{
    let data = getDataFromLS()
    setInputTask(data[id]?.task)
    //  setEditForm(true)
  }
  return (
    <div className="App">
      <Container>
           {/*Heading  */}
              <Row className="justify-content-center mb-5 text-center">
                <Col sm={12} lg={8}>
                  <h1>TO DO LIST</h1>
                </Col>
              </Row>
          {/* Heading */}

          {/* Input & Add btn */}

      
              <Row className="justify-content-center mb-5">
                <Col sm={12} lg={8}>
                  
                        {/* ADD TASK */}
                        {editForm === false &&(
                          <Row>
                              {/* Input */}
                              <Col lg={9} md={9} sm={12}>
                                  <InputGroup className="mb-3">
                                  <Form.Control
                                      value={inputTask}
                                      onChange={e => setInputTask(e.target.value)}
                                      ref={inputRef}
                                      // handleEdit={handleEdit}
                                  />
                                  </InputGroup>
                              </Col>

                              {/*ADD TASK  */}
                              {editForm===false &&(

                                <div>
                                  <Col lg={3} md={3} sm={12}>
                                    <Button variant="dark" className="w-100" onClick={() =>{addTask(inputTask)}}>
                                        ADD TASK
                                    </Button>
                                </Col>
                                </div>

                                
                              )}

                              
                      
                              
                             
                            </Row>
                        )}
                        {/* ADD TASK */}


                       
                    
                        
                </Col>
              </Row>
          {/* Input & Add btn */}

          {/* List */}
              <Row className="justify-content-center ">
                <Col sm={12} lg={8}>
                      <div>
                          {lists.map((list, index) =>{
                              return (
                                  <Container key={list.id}>
                                     
                                         
                                            <Row>
                                                   {/*Task item */}
                                                  <Col lg={10} md={10} sm={10} className="p-2 px-3 pt-2 mb-2 bg-secondary text-white fw-bold">
                                                      <div  key={list.id} >
                                                          {list.task}
                                                      </div>
                                                  </Col>
                                                  {/*Task item */}

                                                  {/* Edit button */}
                                                  <Col lg={1} md={1} sm={1} className="p-2 px-3 mb-2">
                                                    
                                                          <AiFillEdit  id={list.id} key={list.id} className="edit-icon" onClick={(e) =>{handleEdit(index)}} />
                                                          
                                                          
                                                  </Col>
                                                  {/* Edit button */}

                                                  {/* Delete button */}
                                                  <Col lg={1} md={1} sm={1} className="p-2 px-3 mb-2">

                                                          <AiFillDelete id={list.id} key={list.id} className="delete-icon" onClick={(e) =>{
                                                            
                                                              handleDelete(index)
                                                              }}/>
                                                            
                                                  </Col>
                                                  {/* Delete button */}
                                                              
                                            </Row>
                                          
                                        
                                  </Container>
                                            
                              )
                          })}
          
           
        </div>
                </Col>
              </Row>
          {/* List */}              
      </Container>
    </div>
  )
}
export default App;
