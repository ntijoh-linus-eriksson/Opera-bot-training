import React, { useState } from 'react'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
        console.log( email, password);
    }
  
    return (
      <div className="container">
        <form onSubmit={submitForm}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="input"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
            className="input"
          />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  };

  export default Login;