
import './App.css';
import Form from '../src/components/Form.js'
import Table from '../src/components/Table.js'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  let formDs = {
    id: '',
    ename: '',
    salary: ''
  }

  const [formValue, setFormValue] = useState(formDs)
  const [data, setData] = useState([])
  const [requestCount,setCount] =useState(0)
  

  useEffect(() => {
    axios.get('http://localhost:3000/employees').then(response =>{
        setData(prevData=> prevData =response.data)
    })
    
     
  }, [requestCount])


  //user input
  function handleChange(event) {
    const { name, value } = event.target
    setFormValue(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,

      }
    })
  }

  //submit
  function handleSubmit(event) {
    event.preventDefault()
    if(formValue.id!=="" && formValue.ename!==""&& formValue.salary!==""){
      axios.post('http://localhost:3000/employees',
      formValue).then(response => console.log(response)).catch(error => alert("Duplicate Id"))
      setCount(requestCount+1)
    }
    else{
      alert("Please fill all fields")
      return false
    }
    
    

  }
  //reset
  function handleReset() {
    setFormValue(preState => preState= formDs)
  }
  //delete
  function handleDelete(id) {
    axios.delete(`http://localhost:3000/employees/${id}`).then(response => (console.log(response)))
    setCount(requestCount+1)
  }
  //edit
  function handleEdit(id){
    console.log(data)
     let record = data.filter(item=> item.id=== String(id))
     console.log(record[0])
     setFormValue(prevForm=> prevForm= record[0])
     setCount(requestCount+1)
  }
  function handleUpdate(){
    axios.put(`http://localhost:3000/employees/${formValue.id}`,formValue).then(response => console.log(response)).catch(error=> alert(error))
    setCount(requestCount+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management</h1>
      </header>
      <div className='grid-container'>
        <Form data={formValue} handleSubmit={handleSubmit} handleReset={handleReset} handleChange={handleChange} />
        <Table store={data} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
      <button className="update" onClick={()=>handleUpdate()}>Update</button>
    </div>
  );
}

export default App;
