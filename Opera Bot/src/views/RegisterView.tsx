import React, { useState } from 'react'


const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

  
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
        console.log(fullName, email, password, phoneNumber);
    }
  
    return (
      <div className="container">
        <form onSubmit={submitForm}>
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
  