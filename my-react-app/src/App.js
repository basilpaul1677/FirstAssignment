/* eslint-disable react/style-prop-object */

import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const url="https://localhost:8080/api/"
  const[data,setData]=useState({
    name: "",
    dob: "",
    class: "",
    division: "",
    gender: ""
  })
  function submit(e) {
    e.preventDefault();
    Axios.get(url,{
      
      name: data.name,
      dob: data.dob,
      class: data.class,
      division: data.division,
      gender: data.opt,
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  function handle(e) {
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
    
  }
  return (
    <div className="App">
      <h1>STUDENT INFORMATIONS</h1>
      <header className="App-header">
        <p>Fill the below details</p>
      <form id="myForm" action=""onSubmit={(e)=>submit(e)} method="post">
      NAME : <input type="text" id="name" onChange={(e)=>handle(e)} value={data.name} name="name" placeholder="name" pattern="/^[a-zA-Z]+ [a-zA-Z]+[\s]+$/" required ></input><br></br><br></br>
      Date Of Birth : <input type="date" id="dob" onChange={(e)=>handle(e)} value={data.dob} name="dob" placeholder="DOB" required></input><br></br><br></br>
          
      CLASS : <select id="class"onChange={(e)=>handle(e)} value={data.class} name="class">
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select><br></br><br></br>
        DIVISION : <select id="division" onChange={(e)=>handle(e)} value={data.division} name="division">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select><br></br><br></br>
        GENDER : <input type="radio" id="opt1"onChange={(e)=>handle(e)} value="male"  name="opt" ></input>
                  <label for="opt1">MALE</label>
                 <input type="radio" id="opt2" onChange={(e)=>handle(e)} value="female" name="opt"></input>
                  <label for="opt2">FEMALE</label><br></br><br></br>
  

<button type="submit" class="submit" name="submit">SUBMIT</button>
<input type="reset" class="button"onClick="myFunction()" value="RESET FORM"></input>   

<div className="colrt">
  <table>
    <thead>
      <tr>
        <th>NAME   </th>
        <th>Date of Birth    </th>
        <th>Class    </th>
        <th>Division     </th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <td>{data.name}  </td>
        <td>{data.dob}  </td>
        <td>{data.class} </td>
        <td>{data.division}  </td>
        <td>{data.opt}  </td>
      </tr>
      
        
      
    </tbody>
  </table>
  </div>
</form>
{
     function myFunction()
     {
      document.getElementById("myForm").reset();
    }
  }

      </header>
    </div>
  );
}

export default App;
