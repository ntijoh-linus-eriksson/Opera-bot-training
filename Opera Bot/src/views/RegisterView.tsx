import React, { useState } from 'react'

const Register = () => {

    const [users, setUsers] = useState([
    {
      name: "Jonas Eriksson",
      email: "Jonas@eriksson.com",
      password: "123",
      phoneNumber: "0723654"
    },
    {
      name: "Japp Eriksson",
      email: "japp@eriksson.com",
      password: "321",
      phoneNumber: "0725654"
    },
    {
      name: "Stefan Eriksson",
      email: "Stefan@eriksson.com",
      password: "iskor",
      phoneNumber: "072543684"
    }
  ])

  const submitForm = (event: React.FormEvent<HTMLFormElement>, name : string, email : string, password : string, phoneNumber : string) => {
    event.preventDefault()
    setUsers([...users, {name, email, password, phoneNumber}])
  }

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    console.log(users)

  
    return (
      <div className="container">
        <form onSubmit={(e) => submitForm(e, fullName, email, password, phoneNumber)}>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="FullName"
            className="input"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="input"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="input"
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="PhoneNumber"
            className="input"
          />
          <br />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  };

  export default Register;
  