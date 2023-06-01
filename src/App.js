
import './App.css';
import React, { useState } from 'react';
import Form from './Components/form';

function App() {
  const [teamList, setTeamList] = useState([]);
  const [values, setValues] = useState({name:'', email:'', role:''});

  const onSubmit = () => {
    setTeamList([values, ...teamList]);
    setValues({name:'', email:'', role:''});
  }

  const onChange = (name,value) => {
    setValues({...values, [name]: value});
  }

  return (
    <div className="App">
      <Form
        values={values}
        change = {onChange}
        submit = {onSubmit}
      />
      {teamList.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email},{member.name},{member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
