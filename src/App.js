import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuidv4 } from 'uuid';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState, useRef, useEffect } from "react"
import { Button, InputGroup, Form, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () =>{
 
  const [isEditing, setIsEditing] = React.useState(false)
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
    data = [...data, {id: uuidv4(), task: task}]
    localStorage.setItem('lists', JSON.stringify(data))
    setLists(data)
    setInputTask('') 
  }
  // edit task
  const editTask = (task) =>{
    let data = getDataFromLS()
    if(isEditing) {
      // handle edit todo
    } else {
      data = [...data, {id: uuidv4(), task: task}]
    }
    setLists(data) 
    setEditForm(false)  
  }
  // handleEdit
  const handleEdit = (id) =>{
    
    setEditForm(true)
    let data = getDataFromLS()
    // let [{id: id_task, task: task}] = data
    // let idTask = id_task

    setInputTask(data[id]?.task)
    let id_task = data[id]?.id
    let id_item = id
    // data[id_item] = {id: id_task, task: 'AAAAAAAA'}
    // console.log(data, InputGroup)
    // localStorage.setItem('lists', JSON.stringify(data))
    console.log(id_item, id_task, data[id]?.task)
    

  
    
   
  }

  const [lists, setLists] = useState(getDataFromLS())
  const [inputTask, setInputTask] = useState('')
  const inputRef = useRef()
  useEffect(() =>{
      inputRef.current.focus()
  })


  // edit form
  const [editForm, setEditForm]=useState(false);
  console.log(inputTask)
  
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
                                  <Col lg={3} md={3} sm={12}>
                                    <Button variant="dark" className="w-100" onClick={() =>{addTask(inputTask)}}>
                                        ADD TASK
                                    </Button>
                                </Col>                                               
                              )}

                               {/* EDIT TASK */}
                              
                               {editForm===true &&(                               
                                          <Col lg={3} md={3} sm={12}>
                                            <Button variant="dark" className="w-100" onClick={() =>{editTask(inputTask)}}>
                                                EDIT
                                            </Button>
                                          </Col>             
                                )}                            
                            </Row>
                     
                       


                       
                    
                        
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
