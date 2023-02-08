"use client"

import React, { useState } from 'react'
import { Prisma } from '@prisma/client'
import { fetcher } from "../../utils/fetcher"
import prisma from "../../lib/prisma"

export async function getProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany()
  return {
    props: { initialUsers : users }
  }
}

const Register = ({ initialUsers } : any ) => {

  const [users, setUsers] = useState<Prisma.UserUncheckedCreateInput[]>(initialUsers)
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false)
  const [alias, setAlias] = useState('')

  const toggleChecked = () => setIsAdmin(value => !value)
  
    return (
      <div className="container">
        <form 
          onSubmit={async (e) => {
            e.preventDefault()
            const body: Prisma.UserCreateInput = { email, username, password, isAdmin, alias }
            await fetcher("/api/createUser", { user : body})
            console.log(body)
            await setUsers([...users, body])
            console.log(users)
          }}
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
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
          <br />
          <input
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            type="text"
            placeholder="Alias"
            className="input"
          />
          <br />
          <label placeholder=''>Check this if you are admin, dont lie</label>
          <input type="checkbox" checked={isAdmin} onChange={toggleChecked}/>
          <br />
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    );
  };

  export default Register;
  