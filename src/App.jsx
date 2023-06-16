import React from 'react'
import Table from 'react-bootstrap/Table';
import Container  from 'react-bootstrap/Container';
import { useState,useEffect } from 'react';
import Login from './Login';

export default function App() {
  const[todos,setTodo]=useState([]);

  useEffect(()=>{
    getData();
  },[]);

  const getData = async() => {
    try {
      const incomingData = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const formattedData = await incomingData.json();
      setTodo(formattedData);
      console.log(formattedData);
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className='my-5'>
        <Login/>
<h1 className='my-5 text-center display-2'>Todo List</h1>
      <Table striped bordered hover>
        <thead>table
        </thead>
        <tbody>
          {todos.map((todo,i) => (
            <tr key={todo.id}>
              <td>{i=1}</td>
              <td>{todo.title}</td>rati
              {/* <td>{todo.copleted}</td> */}
          </tr>
          ))}
        </tbody>
        </Table>
      </Container>
        </div>
     );
    }